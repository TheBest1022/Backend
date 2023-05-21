import { getUsersForCompany } from './yourFile'; // Reemplaza 'yourFile' con la ruta real del archivo que contiene la función

// Mockear los módulos necesarios
jest.mock('./yourFile', () => ({
  selectAllUser: jest.fn(),
  selectAllUserForCompany: jest.fn(),
}));

describe('getUsersForCompany', () => {
  let req, res;

  beforeEach(() => {
    req = { params: { id: null } };
    res = {
      status: jest.fn(() => res),
      json: jest.fn(),
    };
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should return all users when id is null', async () => {
    const mockData = [{ name: 'User 1' }, { name: 'User 2' }];
    selectAllUser.mockResolvedValueOnce([mockData]);

    await getUsersForCompany(req, res);

    expect(selectAllUser).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockData);
  });

  test('should return users for a specific company when id is not null', async () => {
    const companyId = 'exampleId';
    const mockData = [{ name: 'User 1' }, { name: 'User 2' }];
    selectAllUserForCompany.mockResolvedValueOnce([mockData]);

    req.params.id = companyId;
    await getUsersForCompany(req, res);

    expect(selectAllUserForCompany).toHaveBeenCalledWith(companyId);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockData);
  });

  test('should return a 500 status and error message if an error occurs', async () => {
    const errorMessage = 'Something went wrong';
    selectAllUser.mockRejectedValueOnce(new Error(errorMessage));

    await getUsersForCompany(req, res);

    expect(selectAllUser).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      status: 'error',
      message: `ERROR DE SERVIDOR: ${errorMessage}`,
    });
  });
});
