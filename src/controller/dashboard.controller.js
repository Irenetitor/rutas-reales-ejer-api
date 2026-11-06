import { postDashboardService } from "../services/dashboard.service.js";

export async function postDashboardController(req, res) {
  const dash = req.body;
  res.status(200).send(await postDashboardService(dash));
}
