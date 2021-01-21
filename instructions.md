# Dataflow Cheatsheet

## Dataflow Graphic

[Dataflow Cheat Sheet](https://www.figma.com/file/AHK264MHy58rkDXIGRBlqn/Dataflow?node-id=0%3A1)

### Redux->React

1. Write your initial state

   - Here we are deciding what the state will look like
    and never stray from that shape.

   - Example of Normalized state.

      ```js
      {
        1: {
            id: 1,
            name: 'Mylo',
        },
        2: {
            id: 2,
            name: 'Nish',
        },
      }
      ```

2. Use useSelector to get information from store

   - This is where you'll modify the shape of information into
   what you need it to look like for the render.
   - Example of useSelector syntax with normalized state.

     ```js
     const instructors = useSelector((state)=>Object.values(state.puppies)
       //double check for expected results
       //console.log(instructors) [{id:1, name:"Mylo},{id:2,name:"Nish"}]
     ```

3. Render initial state

   - This is how we check to make sure we are grabbing the right
   information and able to render it before we even mess with our
   API.

4. Dispatch a ThunkActionCreator to kick off the cycle to get
   information from the database.
    - Here you will _plan_ the name of your ThunkActionCreator.
      It will not be defined yet.
    - Think about when you want to dispatch the thunk (useEffect, onClick)

### Redux->Express/Postgres

1. Begin writing the ThunkActionCreator planned in *Redux-React* step 4
    - Make sure the variables passed in from the React component
      are what you're expecting.
    - Here you'll _plan_ the route for your backend.
    - *Remember to use RESTful routes*.
    - Think about the params/body your backend route will need.
    - ThunkActionCreator syntax example

      ```js
      const thunkName = (var1, var2) => async(dispatch) => {
        const res = await fetch('/api/route/to/backend')
      }
      ```

### Express/Postgres->Redux

1. Define the route planned in *Redux->Express* step 1. Make sure
   that the params/body are what you expected.

2. Query the database for the information needed.

3. Send a json response back to the frontend with the information attached.

### Redux->Internal state change->React

1. Return to your ThunkActionCreatorParse the JSON given from the backend,
   and double check to make sure it's what you expected.
2. _Plan_ the name of and dispatch an ActionCreator passing in the
   information received from the database.
   - Final ThunkActionCreator syntax example

   ```js
      const thunkName = (var1, var2) => async(dispatch) => {
        const res = await fetch('/api/route/to/backend')
        const data = await res.json() //double-check for expected results
        dispatch(actionCreatorName(data))
      }
      ```

3. Write the ActionCreator planned in the previous step, _plan_ the
   ActionType name, and assign the data from the back and the payload.
4. Write the ActionType planned in the previous step.
5. Create a case in your reducer for the ActionType written in the
   previous step.
   - This is where you will modify the information to look like it should
   in normalized state.
   - After modifying the information, log it to make sure it is
   what you are expecting.
6. Now that you've put the information into your state, your React
   Component should update! The cycle is complete, let's do it again.
