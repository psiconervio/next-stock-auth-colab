import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { unlink } from "fs/promises";
// import cloudinary from "@/libs/cloudinary";
// import { processImage } from "@/libs/processImage";

export async function GET() {
  try {
    const results = await prisma.product.findMany();
    return NextResponse.json(results);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request) {
  try {
    const data = await request.formData();
    const image = data.get("image");

    if (!data.get("name")) {
      return NextResponse.json(
        {
          message: "Name is required",
        },
        {
          status: 400,
        }
      );
    }

    // if (!image) {
    //   return NextResponse.json(
    //     {
    //       message: "Image is required",
    //     },
    //     {
    //       status: 400,
    //     }
    //   );
    // }

    // const buffer = await processImage(image);

    // const res = await new Promise((resolve, reject) => {
    //   cloudinary.uploader
    //     .upload_stream(
    //       {
    //         resource_type: "image",
    //       },
    //       async (err, result) => {
    //         if (err) {
    //           console.log(err);
    //           reject(err);
    //         }

    //         resolve(result);
    //       }
    //     )
    //     .end(buffer);
    // });

    const result = await prisma.product.create({
      data: {
        name: data.get("name"),
        description: data.get("description"),
        price: parseFloat(data.get("price")),
        // image: res.secure_url,
      },
    });

    return NextResponse.json({
      name: data.get("name"),
      description: data.get("description"),
      price: data.get("price"),
      id: result.id,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
