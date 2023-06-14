import { getFaceId } from "../model/Face.js";

export const obtenerFaceId = async (req, res) => {
    try {
      const [data] = await getFaceId(req.params.id);
      return res.status(201).json(data);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "error",
        message: `ERROR DE SERVIDOR: ${error}`,
      });
    }
  };
  