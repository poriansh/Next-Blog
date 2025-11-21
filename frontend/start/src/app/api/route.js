export function GET() {
  return Response.json({
    data: {
      message: "Hello World",
      statusCode: 200,
    },
  });
}
