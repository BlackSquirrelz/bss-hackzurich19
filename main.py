def main():
    print("python main function")
    get_credentials()

def get_credentials():

    import os
    from twilio.rest import Client

    account_sid = os.environ['TWILIO_ACCOUNT_SID']
    auth_token = os.environ['TWILIO_AUTH_TOKEN']
    client = Client(account_sid, auth_token)

    welcome_message = "Welcome to the SBB - Text Adventure, are you ready to begin your adventure?"

    message = client.messages.create(to=my_cell, from=my_twilio, body=welcome_message)
    


if __name__ == '__main__':
    main()