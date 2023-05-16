<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />
  <title>My Quiz App</title>
</head>
<body>
  <div class="quiz-container" id="quiz">
    <div class="quiz-header">
      <h2 id="question">Question is loading...</h2>
      <ul>
        <li>
          <input type="radio" name="answer" id="a" class="answer" />
          <label for="a" id="a-text">Answer A</label>
        </li>
        <li>
          <input type="radio" name="answer" id="b" class="answer" />
          <label for="b" id="b-text">Answer B</label>
        </li>
        <li>
          <input type="radio" name="answer" id="c" class="answer" />
          <label for="c" id="c-text">Answer C</label>
        </li>
        <li>
          <input type="radio" name="answer" id="d" class="answer" />
          <label for="d" id="d-text">Answer D</label>
        </li>
      </ul>
    </div>
    <button id="submit">Submit</button>
  </div>
  <script src="script.js"></script>
</body>
</html>
