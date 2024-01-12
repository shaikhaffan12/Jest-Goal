// Example function to be tested
function addNumbers(a, b) {
    return a + b;
  }
  
  test('Addition test with expect.assertions()', () => {
    expect.assertions(1);
  
    const result = addNumbers(2, 3);
  
    expect(result).toBe(5);
  });
  
  test('Addition test with expect.hasAssertions()', () => {
    expect.hasAssertions();
  
    const result = addNumbers(2, 3);
  
    expect(result).toBe(5);
  });
  