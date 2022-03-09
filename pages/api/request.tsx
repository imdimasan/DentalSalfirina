import { NextApiRequest, NextApiResponse } from "next";

interface MessageNextApiRequest extends NextApiRequest {
  query: {
    message?: string;
  };
}

export default function request(
  req: MessageNextApiRequest,
  res: NextApiResponse
) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      message: req.query.message ?? "Message default",
    })
  );
}
