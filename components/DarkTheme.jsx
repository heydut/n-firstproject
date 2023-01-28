function DarkTheme() {
  return (
    <style jsx global>
      {`
        /* Dark Theme */
        :root {
          --background-color: black;
          --text-color: white;
          --link-color: gold;
        }
      `}
    </style>
  );
}

export default DarkTheme;
