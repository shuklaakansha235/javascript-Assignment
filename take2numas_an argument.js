function demonstrateVariableHoisting(a, b) {
    console.log(x); // Output: undefined (variable is hoisted)
    
    var x; // Variable declaration (hoisted)
    
    console.log(x); // Output: undefined (variable is still undefined)
    
    x = a + b; // Variable assignment
    
    console.log(x); // Output: Sum of a and b (variable has a value)
    
    return x; // Return the sum of a and b
  }
  
  console.log(demonstrateVariableHoisting(5, 10)); // Output: Sum of 5 and 10
  