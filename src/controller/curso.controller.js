import { selectCourse } from "../model/Curso.js";

export const getCourseForId = async (req, res) => {
    try {
      const [data] = await selectCourse(req.params.id);
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "error",
        message: `ERROR DE SERVIDOR: ${error}`,
      });
    }
  };
  