 

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
        }
    ]
}

t = data.books.map(d=>{
    return d.title;
})
 console.log(t);