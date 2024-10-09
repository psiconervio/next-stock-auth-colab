import { NextResponse } from "next/server";
import prisma from "@/libs/db";
import cloudinary from "@/libs/cloudinary";
import { processImage } from "@/libs/processImage";
import { unlink } from "fs/promises";


export async function GET(request, { params }) {
  try {
    const result = await prisma.product.findUnique({
      where: { id: parseInt(params.id, 10) },
    });

    if (!result) {
      return NextResponse.json(
        {
          message: "Producto no encontrado",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const result = await prisma.product.delete({
      where: { id: parseInt(params.id, 10) },
    });

    return new Response(null, {
      status: 204,
    });
  } catch (error) {
    if (error.code === "P2025") {
      return NextResponse.json(
        {
          message: "Producto no encontrado",
        },
        {
          status: 404,
        }
      );
    }
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const data = await request.formData();
    const image = data.get("image");
    const updateData = {
      name: data.get("name"),
      price: parseFloat(data.get("price")),
      description: data.get("description"),
    };

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

    if (image) {
      const buffer = await processImage(image);

      const res = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              resource_type: "image",
            },
            async (err, result) => {
              if (err) {
                console.log(err);
                reject(err);
              }

              resolve(result);
            }
          )
          .end(buffer);
      });

      updateData.image = res.secure_url;
    }

    const result = await prisma.product.update({
      where: { id: parseInt(params.id, 10) },
      data: updateData,
    });

    return NextResponse.json(result);
  } catch (error) {
    if (error.code === "P2025") {
      return NextResponse.json(
        {
          message: "Producto no encontrado",
        },
        {
          status: 404,
        }
      );
    }
    console.log(error);
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 500 }
    );
  }
}
