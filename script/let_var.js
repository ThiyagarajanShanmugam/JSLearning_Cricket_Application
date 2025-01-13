function let_var()
{
  const output = document.getElementById("let-var-output");
  output.textContent = "";

  output.textContent += "Using `let` (Block Scoped):\n";
  {
    let substitutedPlayer = "Axar Patel (Substitute)";
    output.textContent += `${substitutedPlayer} is temporarily on the field.\n`;
  }
  try {
    output.textContent += `Outside the block: ${substitutedPlayer}\n`; // this wont work buddy!
  } catch {
    output.textContent += "Outside the block(field): ReferenceError (Player Axar Patel not accessible).\n";
  }

  output.textContent += "\n";
  output.textContent += "Using `var` (Function Scoped):\n";
  {
    var permanentUmpire = "Umpire B";
    output.textContent += `${permanentUmpire} is officiating the match.\n`;
  }
  output.textContent += `Outside the block(field): ${permanentUmpire} is still officiating.\n`;
}
