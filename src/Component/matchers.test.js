function drinkAll(callback, flavour) {
    if (flavour !== 'octopus') {
      callback(flavour);
    }
  }


function bloop() {
return null;
}

describe('drinkAll', () => {
test('drinks something lemon-flavoured', () => {
    const drink = jest.fn();
    drinkAll(drink, 'lemon');
    expect(drink).toHaveBeenCalled();
});

test('does not drink something octopus-flavoured', () => {
    const drink = jest.fn();
    drinkAll(drink, 'octopus');
    expect(drink).not.toHaveBeenCalled();
});

test('drinkEach drinks each drink', () => {
    const drink = jest.fn();
    drinkAll(drink, 'lemon');
    drinkAll(drink, 'lemon');
    expect(drink).toHaveBeenCalledTimes(2);
  });

test('drinks returns', () => {
const drink = jest.fn(() => true);

drink();

expect(drink).toHaveReturned();
});

test('drink returns twice', () => {
    const drink = jest.fn(() => true);
  
    drink();
    drink();
  
    expect(drink).toHaveReturnedTimes(2);
  });

test('drink returns La Croix', () => {
const beverage = {name: 'La Croix'};
const drink = jest.fn(beverage => beverage.name);

drink(beverage);

expect(drink).toHaveReturnedWith('La Croix');
});

test('bloop returns null', () => {
    expect(bloop()).toBeNull();
  });

test('the best drink for octopus flavor is undefined', () => {
const drink = jest.fn(() => true);
expect(drinkAll(drink, 'octopus')).toBeUndefined();
});

});