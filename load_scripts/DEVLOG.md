2024/4/14

I will be putting all the load scripts into a folder called load scripts, and combining all the athletics ones into one.

When you run `python3 load_scripts/load_athletic_calendar.py` and the python file creates a new file, say `test.txt`, then it will be in the directory your shell is in, not inside load_scripts.

All the data will be loaded into a folder called data.
The python `open` function does not work if the directory doesn't exist, so I took care of that in runScripts.sh.

The icalendar library does not have type hints, which is annoying but whatever.

If viewing from `file:///<path to>/magic-mirror/index.html` on your browser, you will get `Unable to fetch portfolio, try again later` for many of the elements.

To avoid this, run `python3 -m http.server`.

The only visual change right now is changing the dates from `4/5` to `Apr 5`, as well as the order possibly changing if two events have the same date.
Ex: `4/16: Golf - Junior Varsity Boys vs. The Hun School of Princeton CHANGED:New location: was originally scheduled at Hun (Home)` to `Apr 16: Golf - Junior Varsity Boys vs. The Hun School of Princeton CHANGED:New location, was originally scheduled at Hun (Home)`.
