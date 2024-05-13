function test () {
    return new Promise( resolve => resolve("hi"));
}


async function t1 () {
    const temp = await test();

    console.log(temp)
}

t1()

test().then(result => console.log(result))