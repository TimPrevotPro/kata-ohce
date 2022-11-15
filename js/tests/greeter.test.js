const test = require('tape')
const Greeter = require('../greeter').Greeter

test('should say "good night" at midnight', (t) => {
  const greeter = new Greeter()
  const result = greeter.greet(0)

  if (result == "Good night"){
    t.pass('Said Good night')
  }
  else{
    t.fail('Did not said Good Night')
  }

  t.end()
})

test('should never return undefined', (t) => {
  // TODO : for each hour from 0 to 23, check that Greeter.greet()
  // never returns undefined
  const greeter = new Greeter()

  for (i = 0; i<=23; i++){
    if(greeter.greet(i) !== 'undefined'){
      t.pass('Never said undefined')
    }
    else{t.fail('Said undefined')}
  }

  t.end()
})
