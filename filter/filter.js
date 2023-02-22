var data = {
    books : [
        {
            title: "The Hobbit",
            price:1500,
            year:2010,
            rating:4.5,
        },
        {
            title: "abc",
            price:4500,
            year:2015,
            rating:4.9,
        },
        {
            title: "java",
            price:250,
            year:2001,
            rating:3.6,
        },
        {
            title: "c++",
            price:150,
            year:2009,
            rating:4.2,
        },
        {
            title: "c++",
            price:150,
            year:2009,
            rating:5,
        }
    ]
}

title = data.books.filter(t=>{
    return t.price == 1500; 
})
console.log(title);

