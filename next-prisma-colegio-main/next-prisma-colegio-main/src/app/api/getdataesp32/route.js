import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function validateCredentials(email, password) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (user && bcrypt.compareSync(password, user.password)) {
    return user;
  }
  return null;
}

export async function POST(req) {
  try {
    const email = req.headers.get('email');
    const password = req.headers.get('password');

    console.log('Email:', email);
    console.log('Password:', password);

    if (!email || !password) {
      return NextResponse.json({ message: 'Faltan credenciales' }, { status: 400 });
    }

    const user = await validateCredentials(email, password);
    if (!user) {
      return NextResponse.json({ message: 'Credenciales no válidas' }, { status: 401 });
    }

    const data = await req.json();
    const newData = await prisma.data.create({
      data: {
        key1: data.key1,
        key2: data.key2
      },
    });
    return NextResponse.json({ message: 'Datos recibidos y guardados', data: newData });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error guardando datos', error: error.message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ message: 'Método no permitido' }, { status: 405 });
}



// // src/app/api/getdataesp32/route.js prueba 1
// import { PrismaClient } from '@prisma/client';
// import bcrypt from 'bcrypt';

// const prisma = new PrismaClient();

// // Función para validar las credenciales
// async function validateCredentials(email, password) {
//   const user = await prisma.user.findUnique({ where: { email } });
//   if (user && bcrypt.compareSync(password, user.password)) {
//     return true;
//   }
//   return false;
// }

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { email, password } = req.headers;

//     if (!email || !password) {
//       return res.status(400).json({ message: 'Faltan credenciales' });
//     }

//     const isValid = await validateCredentials(email, password);
//     if (!isValid) {
//       return res.status(401).json({ message: 'Credenciales no válidas' });
//     }

//     const data = req.body;
//     try {
//       const newData = await prisma.data.create({
//         data: {
//           key1: data.key1,
//           key2: data.key2,
//           // Agrega más campos según tu esquema de Prisma
//         },
//       });
//       res.status(200).json({ message: 'Datos recibidos y guardados', data: newData });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Error guardando datos', error: error.message });
//     }
//   } else {
//     res.status(405).json({ message: 'Método no permitido' });
//   }
// }

//original
// import { getSession } from 'next-auth/react';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export default async function handler(req, res) {
//   const session = await getSession({ req });

//   if (!session) {
//     return res.status(401).json({ error: 'Unauthorized' });
//   }

//   if (req.method !== 'POST') {
//     return res.status(405).end();
//   }

//   const { id, temperature, humidity, veleta,anemometro, pluviometro, time, date } = req.body;

//   try {
//     const newData = await prisma.esp32_01_TableRecord.create({
//       data: {
//         id,
//         temperature,
//         humidity,
//         veleta,
//         anemometro,
//         pluviometro,
//         time,
//         date,
//         userId: session.user.id,
//       },
//     });

//     res.status(201).json(newData);
//   } catch (error) {
//     res.status(500).json({ error: 'Error al guardar los datos' });
//   }
// }
