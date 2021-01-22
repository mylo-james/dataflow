# Dataflow Cheatsheet

## Dataflow Graphic

[Dataflow Cheat Sheet](https://www.figma.com/file/AHK264MHy58rkDXIGRBlqn/Dataflow?node-id=0%3A1)

## Redux->React

Step 1. Write your initial state

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

Step 2. Use useSelector to get information from store

- This is where you'll modify the shape of information into
what you need it to look like for the render.
- Example of useSelector syntax with normalized state.

```js
const instructors = useSelector((state)=>Object.values(state.instructors)
//double check for expected results
//console.log(instructors) [{id:1, name:"Mylo},{id:2,name:"Nish"}]
```

Step 3. Render initial state

- This is how we check to make sure we are grabbing the right
information and able to render it before we even mess with our
API.

Step 4. Dispatch a ThunkActionCreator to kick off the cycle to get
   information from the database.
    - Here you will _plan_ the name of your ThunkActionCreator.
      It will not be defined yet.
    - Think about when you want to dispatch the thunk (useEffect, onClick)

## Redux->Express/Postgres

Step 5. Begin writing the ThunkActionCreator planned in step 4.

- Make sure the variables passed in from the React component
    are what you're expecting.
- Here you'll _plan_ the route for your backend.
- *Remember to use RESTful routes*.
- Think about the params/body your backend route will need.
- ThunkActionCreator syntax example:

```js
const thunkName = (var1, var2) => async(dispatch) => {
const res = await fetch('/api/route/to/backend')
}
```

## Express/Postgres->Redux

Step 6. Define the route planned in step 5.

- Make sure that the params/body are what you expected
- Query the database for the information needed.
- Send a json response back to the frontend with the information attached.

## Redux->Internal state change->React

Step 7. Return to your ThunkActionCreator and Parse the JSON given from the backend. Double check to make sure it's what you expected.

- _Plan_ the name of and dispatch an ActionCreator passing in the
information received from the database.
- Final ThunkActionCreator syntax example:

```js
const thunkName = (var1, var2) => async(dispatch) => {
    const res = await fetch('/api/route/to/backend')
    const data = await res.json() //double-check for expected results
    dispatch(actionCreatorName(data))
}
```

Step 8. Write the ActionCreator planned in the previous step, _plan_ the ActionType name, and assign the data from the back and the payload.

Step 9. Write the ActionType planned in the previous step.

Step 10. Create a case in your reducer for the ActionType written in the previous step.

- This is where you will modify the information to look like it should
in normalized state.
- After modifying the information, log it to make sure it is
what you are expecting.

## DONE

Now that you've put the information into your state, your React
Component should update! The cycle is complete, let's do it again.
