//temporary data

export const userColumns = [
    {field: "id", headerName: "ID", width: 70},
    {field: "user", headerName: "User", width: 230, renderCell: (params)=>{
        return(
            <div className="cellWithImage">
                <img className="cellImg" src={params.row.img} alt="avatar"/>
                {params.row.username}
            </div>
        )
    }},
    {field: "email", headerName: "Email", width: 230},
    {field: "age", headerName: "Age", width: 60},
    {field: "status", headerName: "Status", width: 100, renderCell: (params)=>{
        return(
            <div className={`cellWithStatus ${params.row.status} `}>
                {params.row.status}
            </div>
        )
    }},


    
]

export const userRows = [
    {
        id: 1,
        username: "roadman",
        img: "https://i.ibb.co/SyT6RP1/client1.jpg",
        status: "passive",
        email: "hover@gmail.com",
        age: 21,
    },
    {
        id: 2,
        username: "miro",
        img: "https://i.ibb.co/RYrRKy4/beaut.jpg",
        status: "active",
        email: "jedmiro@live.com",
        age: 17,
    },
    {
        id: 3,
        username: "oldman",
        img: "https://i.ibb.co/RYrRKy4/beaut.jpg",
        status: "passive",
        email: "old10gmail.com",
        age: 55,
    },
    {
        id: 4,
        username: "tweenty121",
        img: "https://i.ibb.co/RYrRKy4/beaut.jpg",
        status: "pending",
        email: "tweenty1@hangout.com",
        age: 30,
    },
    {
        id: 5,
        username: "freemanX",
        img: "https://i.ibb.co/RYrRKy4/beaut.jpg",
        status: "passive",
        email: "five5@live.fr",
        age: 19,
    },
    {
        id: 6,
        username: "sixty6",
        img: "https://i.ibb.co/RYrRKy4/beaut.jpg",
        status: "active",
        email: "six6@hotmail.com",
        age: 22,
    },
    {
        id: 7,
        username: "seven007",
        img: "https://i.ibb.co/RYrRKy4/beaut.jpg",
        status: "pending",
        email: "seven@yahoo.fr",
        age: 25,
    },
    {
        id: 8,
        username: "height88",
        img: "https://i.ibb.co/RYrRKy4/beaut.jpg",
        status: "active",
        email: "height@gmail.com",
        age: 45,
    },
]