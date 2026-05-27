export const LandGllacrtraillloaderWaveHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
  />
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html,
    body {
      background: transparent;
      height: 100%;
      overflow: hidden;
    }

    .loading-wave {
      width: 300px;
      height: 100px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      margin: 0 auto;
    }

    .loading-bar {
      width: 20px;
      height: 10px;
      margin: 0 5px;
      background-color: #3498db;
      border-radius: 5px;
      animation: loading-wave-animation 1s ease-in-out infinite;
    }

    .loading-bar:nth-child(2) {
      animation-delay: 0.1s;
    }

    .loading-bar:nth-child(3) {
      animation-delay: 0.2s;
    }

    .loading-bar:nth-child(4) {
      animation-delay: 0.3s;
    }

    @keyframes loading-wave-animation {
      0% {
        height: 10px;
      }

      50% {
        height: 50px;
      }

      100% {
        height: 10px;
      }
    }
  </style>
</head>
<body>
  <div class="loading-wave">
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
    <div class="loading-bar"></div>
  </div>
</body>
</html>`;

// Backward-compatible alias (used in screens/components).
export const LOADER_WAVE_HTML = LandGllacrtraillloaderWaveHtml;

export const LOADER_DURATION_MS = 5000;
