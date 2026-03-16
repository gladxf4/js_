# Module 12: Regular Expressions

## 1. Creating Regex
- literal: `/pattern/flags`
- constructor: `new RegExp('pattern', 'flags')`

## 2. Common Patterns
- `^`: Start of string
- `$`: End of string
- `.`: Any character (except newline)
- `\d`: Digit
- `\w`: Word character (alphanumeric + underscore)
- `\s`: Whitespace
- `[abc]`: Character set (a, b, or c)

## 3. Flags
- `g`: Global
- `i`: Case-insensitive
- `m`: Multiline

## 4. Groups & Lookaheads
- `(abc)`: Capturing group
- `(?:abc)`: Non-capturing group
- `(?=abc)`: Positive lookahead (asserts what follows)
