import requests
from icalendar import Calendar, Event
from datetime import date
import datetime
from dateutil.relativedelta import relativedelta
import json
from utils import time_to_int, is_event_relevant


def load_events_by_team() -> None:
    for x in range(154, 195):  # TODO: figure out why 154-195
        url = "https://www.peddie.org/calendar/team_" + str(x) + ".ics"  # get url name
        r = requests.get(url, allow_redirects=True)  # get file at url

        with open("data/teamwise_calendars/team_" + str(x) + "_gmt.ics", "wb+") as file:
            # using the `with` syntax should handle closing
            file.write(r.content)


def get_relevant_events() -> list[Event]:
    events: list[Event] = []

    for x in range(154, 195):  # TODO: figure out why 154-195
        with open("data/teamwise_calendars/team_" + str(x) + "_gmt.ics", "r") as file:
            # using the `with` syntax should handle closing
            calendar: Calendar = Calendar.from_ical(file.read())

            for event in calendar.walk("VEVENT"):
                if is_event_relevant(event):
                    events.append(event)

    return events


def event_to_dict(event: Event) -> dict[str, object]:
    event_dict = {}

    event_dict["time int"] = time_to_int(event)
    event_dict["formatted date"] = event.decoded("dtstart").strftime("%b %-d")  # type: ignore
    event_dict["summary"] = event.get("summary")
    event_dict["location"] = event.get("location")  # never used

    event_dict["formatted str"] = (
        f"{event_dict['formatted date']}: {event_dict['summary']}"
    )

    event_dict["raw str"] = str(event)

    return event_dict


def save_events(events: list[Event]):
    # sort events from soonest to furthest
    events.sort(key=lambda event: time_to_int(event))

    # only keep the first 17 or less. I feel like if this is going to happen anyways, why also cut after 2 months? but idc
    events = events[: min(17, len(events))]

    event_dict_list = [event_to_dict(event) for event in events]
    with open("data/relevant_athletic_events.json", "w") as file:
        events_json_str = json.dumps(event_dict_list, indent=4)
        file.write(events_json_str)

    with open("data/relevant_athletic_events.txt", "w") as file:
        str_formatted_events = "\n".join([event["formatted str"] for event in event_dict_list])  # type: ignore
        file.write(str_formatted_events)


if __name__ == "__main__":
    try:
        print(f'Running: "{__file__}"...')

        # If loading has been done already, then this is optional
        print("Loading and saving events by team...")
        events = load_events_by_team()
        print("Finished loading and saving events by team.")

        print("Getting relevant events...")
        events = get_relevant_events()
        # print(f"{events=}")
        print("Finished getting relevant events.")

        print("Saving events to files...")
        save_events(events)
        print("Finished saving events to files.")

        print(f'Finished running: "{__file__}"...')
    except Exception as e:
        print(f'WARNING: Something went wrong in "{__file__}"!')
        print(e)
        raise e
