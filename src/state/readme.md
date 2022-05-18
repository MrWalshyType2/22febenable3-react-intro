To make UI's interactive, React uses state. State is used to manage the data that changes in our components. There are three questions you can ask about some data to identify whether it is state or not:

1. Is it passed in from a parent via props? (probably not state if so)
2. Does it remain unchanged over time? (probably not state if so)
3. Can you compute it based on any other state or props in your component? (probably not state if so)

