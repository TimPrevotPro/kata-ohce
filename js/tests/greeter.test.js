const test = require('tape')
const Greeter = require('../greeter').Greeter

test('should say "good night" at midnight', (t) => {
  const greeter = new Greeter(0)
  const result = greeter.greet()

  if (result == "Good night"){
    t.pass('Said Good night')
  }
  else{
    t.fail('Did not said Good Night')
  }

  t.end()
})

test('should never return undefined', (t) => {

  for (i = 0; i<=23; i++){
    const greeter = new Greeter(i)
    if(greeter.greet() !== 'undefined'){
      t.pass('Never said undefined')
    }
    else{t.fail('Said undefined')}
  }

  t.end()
})
