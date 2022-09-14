// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import avatar from "animal-avatar-generator";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  const seed = (req.query.seed as string) ?? Math.random() + "";
  const animal = avatar(seed, {
    size: 256,
    blackout: false,
  });
  res
    .writeHead(200, {
      "Content-Type": "image/svg+xml",
    })
    .end(animal);
  // res.send(animal);
}
