import { db } from "../index.js";

export const getSystems = async (req, res) => {
  try {
    const query = `select * from systems`;
    // Truy vấn để lấy tất cả dữ liệu từ bảng systems
    const [data] = await db.execute(query);

    if (!!data.length) {
      return res.status(200).json({ message: "True", data });
    } else {
      return res.status(404).json({ message: "Data not found!" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Truy vấn dữ liệu sai" });
  }
};

export const createSystem = async (req, res) => {
  try {
    const query = `insert into systems (maintenance_mode, version, status) values ('1', '1.2.3', '1')`;
    // Truy vấn để lấy tất cả dữ liệu từ bảng systems
    const [data] = await db.execute(query);
    return res.status(201).json({ message: "Thêm thành công" });
  } catch (err) {
    return res.status(500).json({ message: "Truy vấn dữ liệu sai" });
  }
};

export const deleteSystem = async (req, res) => {
  try {
    const { id } = req.params;
    const query = `DELETE FROM systems where id = ${id} `;
    // Truy vấn để lấy tất cả dữ liệu từ bảng systems
    const [data] = await db.execute(query);
    return res.status(201).json({ message: "Xóa thành công" });
  } catch (err) {
    return res.status(500).json({ message: "Truy vấn dữ liệu sai" });
  }
};
