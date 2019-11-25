# Answers

1. What is React JS and what problems does it try to solve? Support your answer with concepts introduced in class and from your personal research on the web.
  React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.
1. What does it mean to think in react?
  It means to think about apps as component-based elements that will be scalable and reusable as our project gets bigger.
1. Describe state.
  React components have a built-in state object, where we store property values that belongs to the component. When the state object changes, the component re-renders.
1. Describe props.
  Props are arguments passed into React components(from parent to children). Props are passed to components via HTML attributes.
1. What are side effects, and how do you sync effects in a React component to state or prop changes?
A side effect is anything that affects something outside the scope of the function being executed. We sync these side effects with the useEffect hook.