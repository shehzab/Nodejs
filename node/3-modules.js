// CommonJS  -- Every file is module (by default)

// Modules

/* Modules are the blocks of encapsulated code that communicate with an
    external application on the basis of their related functionality
    (Encapsulated Code (Only Share Minimum))
*/
// it can be a single file or collection of multiple files
// 3 Types of modules :-
    /*
    -- Core modules        - Built-in modules part of platform and come with node js installation
    -- Local modules       - Custom local modules in the same directory
    -- Third-party Modules - Modules installed via npm or other package managers
    */

// Modules can be loaded into program by using the required function

    const john = "john"
    const peter = "peter"

    const sayHi = (name)=>{
        console.log(`hello there ${name}`)
    }

    sayHi('susan')
    sayHi(john)
    sayHi(peter)
