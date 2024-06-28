export async function GET(req: Request) {
  console.log('method', req);
  const body = await req.text();
  console.log('body', body);

  const html = getHtml({ body });
  // const res = await fetch('https://random-api.com/...')
  // const data = await res.json()

  return new Response(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html',
    },
  });
}

export async function POST(req: Request) {
  console.log('method', req.method);
  const body = await req.text();
  console.log('body', body);

  const html = getHtml({ body });
  // const res = await fetch('https://random-api.com/...')
  // const data = await res.json()
console.log( html);
  return new Response(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html',
    },
  });
}

// const html = 'Hello from Next.js! <script> alert("123") </script>';


const getHtml = (data: any) => { 
return `

  <script>
  // JSON.parse(
  //   JSON.stringify({
  //     loc: this.contentWindow.document.location.href,
  //     redirect: "success",
  //     location: document.location.href,
      
      
  //   })
  const data = ${JSON.stringify(data)};
  window.parent.postMessage(
  data,
    "*",
  );
  </script>
`
}
// // pages/api/file.js
// import fs from 'fs';
// import path from 'path';

// export default function handler(req, res) {
//   const { method } = req;
//   console.log('method', method);
//   switch (method) {
//     case 'GET':
//       // Logic for GET request
//       // const filePath = path.join(process.cwd(), 'public', 'sample.txt'); // Change the file path as needed
//       // fs.readFile(filePath, (err, data) => {
//       //   if (err) {
//       //     res.status(500).json({ error: 'Failed to read file' });
//       //     return;
//       //   }
//       //   // res.setHeader('Content-Type', 'text/plain');
//       // });
//       res.setHeader('Content-Type', 'text/html; charset=utf-8');
//       res.send("file content");
//       break;
    
//     case 'POST':
//       // Logic for POST request
//       const { filename } = req.body;
//       const dynamicFilePath = path.join(process.cwd(), 'public', filename); // Change the file path as needed
//       fs.readFile(dynamicFilePath, (err, data) => {
//         if (err) {
//           res.status(500).json({ error: 'Failed to read file' });
//           return;
//         }
//         res.setHeader('Content-Type', 'text/plain');
//         res.send(data);
//       });
//       break;

//     default:
//       res.setHeader('Allow', ['GET', 'POST']);
//       res.status(405).end(`Method ${method} Not Allowed`);
//   }
// }
