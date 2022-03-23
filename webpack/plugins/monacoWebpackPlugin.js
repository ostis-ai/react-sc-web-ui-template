const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

const config = {
    "languages": [],
    "features": [
      'bracketMatching', 'caretOperations', 'clipboard', 'codelens', 'colorDetector', 'comment', 'contextmenu',
      'coreCommands', 'cursorUndo', 'find', 'folding', 'format', 'gotoLine', 'hover', 'inPlaceReplace', 'inspectTokens', 'linesOperations', 'links',
      'parameterHints', 'rename', 'smartSelect', 'snippets', 'suggest', 'wordHighlighter', 'wordOperations'
    ]
  }

module.exports = new MonacoWebpackPlugin(config)