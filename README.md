1. Explain why functional components are better than class based components

    Functional Components are easy to undertand and code
    Easy to write 
    Needs less boilerplate code


2. Explain the function and importance of key prop in a list

    Key prop helps DOM to differentiate between elements those are same except for the key. Hence if kew would not be there It will be an issue for JS engine to recognise them as individual element.

3. Explain when to lift state up to a parent component.
    we need to lift the state up when a state is required by multiple different components. We move the state to a common ancestor of all the components that are using particular state.