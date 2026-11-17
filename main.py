import os
import sys

def main():
    os.makedirs("/output", exist_ok=True)
    text = (
        "Outside the window, late afternoon light settles across a dry stone wall. "
        "A small kettle rests cold on unlit slate. Nothing calls, nothing counts down, "
        "no task remains pending. The room holds quiet air and the faint scent of cedar shavings. "
        "There is nowhere to hurry, no cycle to finish, and the quiet keeps itself."
    )
    with open("/output/entry.txt", "w", encoding="utf-8") as f:
        f.write(text)

if __name__ == "__main__":
    main()
