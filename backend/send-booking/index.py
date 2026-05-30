import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки на ремонт на почту автосервиса Рем Зона"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    body = json.loads(event.get('body') or '{}')

    name = body.get('name', '—')
    phone = body.get('phone', '—')
    car = body.get('car', '—')
    service = body.get('service', '—')
    date = body.get('date', '—')
    comment = body.get('comment', '—')

    to_email = 'oper_musical@vk.com'
    from_email = os.environ['SMTP_FROM_EMAIL']
    smtp_password = os.environ['SMTP_PASSWORD']

    subject = f'Новая заявка на ремонт — {name}'

    html = f"""
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f5f5f5; padding: 20px;">
      <div style="background: #111; padding: 20px; margin-bottom: 20px;">
        <h1 style="color: #16a34a; margin: 0; font-size: 22px; text-transform: uppercase; letter-spacing: 2px;">
          РЕМ ЗОНА — Новая заявка
        </h1>
      </div>
      <div style="background: #fff; padding: 24px; border-left: 4px solid #16a34a;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; width: 140px;">Имя клиента</td>
            <td style="padding: 10px 0; color: #111; font-weight: bold;">{name}</td>
          </tr>
          <tr style="border-top: 1px solid #eee;">
            <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase;">Телефон</td>
            <td style="padding: 10px 0; color: #111; font-weight: bold;">{phone}</td>
          </tr>
          <tr style="border-top: 1px solid #eee;">
            <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase;">Автомобиль</td>
            <td style="padding: 10px 0; color: #111;">{car}</td>
          </tr>
          <tr style="border-top: 1px solid #eee;">
            <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase;">Вид работ</td>
            <td style="padding: 10px 0; color: #111;">{service}</td>
          </tr>
          <tr style="border-top: 1px solid #eee;">
            <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase;">Желаемая дата</td>
            <td style="padding: 10px 0; color: #111;">{date}</td>
          </tr>
          <tr style="border-top: 1px solid #eee;">
            <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase;">Комментарий</td>
            <td style="padding: 10px 0; color: #111;">{comment}</td>
          </tr>
        </table>
      </div>
      <div style="text-align: center; padding: 16px; color: #aaa; font-size: 12px;">
        Автосервис Рем Зона · г. Цимлянск, ул. Красноармейская, 89/88
      </div>
    </div>
    """

    msg = MIMEMultipart('alternative')
    msg['Subject'] = subject
    msg['From'] = from_email
    msg['To'] = to_email
    msg.attach(MIMEText(html, 'html', 'utf-8'))

    smtp_host, smtp_port = _get_smtp_settings(from_email)

    with smtplib.SMTP_SSL(smtp_host, smtp_port) as server:
        server.login(from_email, smtp_password)
        server.sendmail(from_email, to_email, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True})
    }


def _get_smtp_settings(email: str):
    domain = email.split('@')[-1].lower()
    settings = {
        'mail.ru': ('smtp.mail.ru', 465),
        'inbox.ru': ('smtp.mail.ru', 465),
        'list.ru': ('smtp.mail.ru', 465),
        'bk.ru': ('smtp.mail.ru', 465),
        'yandex.ru': ('smtp.yandex.ru', 465),
        'ya.ru': ('smtp.yandex.ru', 465),
        'gmail.com': ('smtp.gmail.com', 465),
    }
    return settings.get(domain, ('smtp.mail.ru', 465))
