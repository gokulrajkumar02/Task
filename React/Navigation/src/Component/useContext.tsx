// const ThemeContext = createContext();

// function App() {
//   const [theme, setTheme] = useState('light');
  
//   return (
//     <ThemeContext.Provider value={theme}>
//       <SubscribedParent />
//       <button onClick={() => setTheme('dark')}>Change Theme</button>
//     </ThemeContext.Provider>
//   );
// }

// // Parent uses context (SUBSCRIBED)
// function SubscribedParent() {
//   const theme = useContext(ThemeContext); // ✅ Subscribed
//   console.log('🔴 SubscribedParent rendered');
  
//   return (
//     <div>
//       <p>Theme: {theme}</p>
//       <Child1 />
//       <Child2 />
//     </div>
//   );
// }

// // Children do NOT use context
// function Child1() {
//   console.log('🟡 Child1 rendered');
//   return <div>I am Child1</div>;
// }

// function Child2() {
//   console.log('🟢 Child2 rendered');
//   return <div>I am Child2</div>;
// }

