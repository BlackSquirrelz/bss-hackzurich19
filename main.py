import os
from twilio.rest import Client
import env_var

def main():
    print("python main function")

    account_sid = env_var.twilio_account_sid
    auth_token = env_var.twilio_auth_token
    my_twilio= env_var.twilio_phone
    my_cell = '++41797725070'

    client = Client(account_sid, auth_token)

    # Build task actions that say something and listens for a repsonse.
    welcome_actions = {
        'actions': [
            {'say': 'Welcome to SBB - Surprise Travel. Would you like to participate in the adventure and learn more about your destination?'},
            {'listen': True}
        ]
    }

    task = client.autopilot.assistants('UA482a5a7b43880b57c176b292967ea404') \
        .tasks('UD55aaf72992fb0714d353fd0e225ea907')
        .fetch()

    print("Welcome Task has been created")
    print(task.sid)


if __name__ == '__main__':
    main()