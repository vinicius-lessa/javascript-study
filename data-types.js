// How to Run
//  Comment/uncomment the function call at the bottom to test all or specific data types.
//  Open node.js terminal by typing `node data-types.js` in cmd

// ------------------------------------------------------------------

function showDataTypes(specificType = null) {
    // Null and Undefined
    const nullUndefinedShowCase = () => {
        console.log("\n---- Null and Undefined Data Types ----");
        let undefinedVar;
        let nullVar = null;
        console.log("Undefined Variable:", undefinedVar, typeof undefinedVar);
        console.log("Null Variable:", nullVar, typeof nullVar);
    }
    
    // Boolean
    const booleanShowCase = () => {
        console.log("\n---- Boolean Data Type ----");
        let boolTrue = true;
        let boolFalse = false;
        let objBoolean = new Boolean(true);
        console.log("Boolean True:", boolTrue);
        console.log("Boolean False:", boolFalse);
        console.log("Boolean Object:", objBoolean);
    }

    // String
    const stringShowCase = () => {
        console.log("\n---- String Data Type ----");
        let str = "Hello, World!";    
        let objString = new String("Hello, Object World!");
        console.log("String Primitive:", str);
        console.log("String Object:", objString);
    }

    // Number
    const numberShowCase = () => {
        console.log("\n---- Number Data Type ----");
        let integerNum = 42;
        let floatNum = 3.14;
        let negativeNum = -7;
        let objNumber = new Number(100);    
        console.log("Integer:", integerNum);
        console.log("Float:", floatNum);
        console.log("Negative Number:", negativeNum);
        console.log("Number Object:", objNumber);
    }

    // BigInt
    const bigIntShowCase = () => {
        console.log("\n---- BigInt Data Type ----");
        let bigIntNum = 9007199254741991n;
        let objBigInt = BigInt(9007199254741991);
        console.log("BigInt Primitive:", bigIntNum);
        console.log("BigInt Object:", objBigInt);
        console.log("TypeOf:", typeof bigIntNum);
    }
    
    // Symbol
    const symbolShowCase = () => {
        console.log("\n---- Symbol Data Type ----");
        let sym1 = Symbol("unique");
        let sym2 = Symbol("unique");
        console.log("Symbol 1:", sym1);
        console.log("Symbol 2:", sym2);
        console.log("Are symbols equal?", sym1 === sym2); // false
    }

    switch(specificType) {
        case 'nullAndUndefined':
            nullUndefinedShowCase();
            return;
        case 'boolean':
            booleanShowCase();
            return;
        case 'string':
            stringShowCase();
            return;
        case 'number':
            numberShowCase();            
            return;
        case 'bigint':
            bigIntShowCase();
            return;
        case 'symbol':
            symbolShowCase();
            return;
        default:
            nullUndefinedShowCase();
            booleanShowCase();
            stringShowCase();
            numberShowCase();
            bigIntShowCase();
            symbolShowCase();
            return;
    }
}

// Show all data types
// showDataTypes();

// Show specific type
showDataTypes('nullAndUndefined');
// showDataTypes('boolean');
// showDataTypes('string');
// showDataTypes('number');
// showDataTypes('bigint');
// showDataTypes('symbol');