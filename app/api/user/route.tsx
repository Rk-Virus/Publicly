export const users = [
  { id: 1, name: "John Doe"},
  { id: 2, name: "Jane Doe"},
  { id: 3, name: "Alice"},
  { id: 4, name: "Bob"},
];

export async function GET(){
    return Response.json(users);
}

export async function POST(request: Request){
    const {name} = await request.json();
    const newUser = {
        id: users.length + 1,
        name
    };
    users.push(newUser);
    return new Response(JSON.stringify(newUser), {
        headers: {"Content-Type": "application/json"},
        status: 201
    });
}