## What's MVC?

- Separation of Concerns
  |Models|Views|Controllers|
  |:-:|:-:|:-:|
  |Database|Frontend|Backend|
  |Represent your data in your code|What the users sees|Connecting your Models and your Views|
  |Work with your data (e.g., save, fetch)|Decoupled from your application code|Contains the "in-between" logic, routes and is split across middleware functions|

- Currently, our logic is in the `routes`. It should be in the `controller` instead.


