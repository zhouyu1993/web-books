#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import requests
import json
import os
import regex as re
import browsercookie

mobile_headers = {
    'Cookie': 'LF_ID=1586771198534-7814141-7345570; GCID=9c7803f-a6da1df-a061ee1-7481502; GRID=9c7803f-a6da1df-a061ee1-7481502; _ga=GA1.2.1415313430.1586831571; gksskpitn=86d100af-f76b-474c-9445-1c2ac13bc49d; _gid=GA1.2.1208643589.1588057035; GCESS=BAEEkvcdAAYEQKbNTAgBAwQEAC8NAAcEXw7C5wsCBAADBP4tqV4CBP4tqV4MAQEFBAAAAAAKBAAAAAAJAQE-; Hm_lvt_022f847c4e3acd44d4a2481d9187f1e6=1586832541,1586875846,1587350354,1588145664; Hm_lpvt_022f847c4e3acd44d4a2481d9187f1e6=1588148792; _gat=1; SERVERID=1fa1f330efedec1559b3abbcb6e30f50|1588148793|1588141427',
    'Accept-Language': "zh-cn",
    'Accept-Encoding': "br, gzip, deflate",
    'Content-Type': "application/json",
    'Content-Length': "48",
    'User-Agent': "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36",
    'X-GEEK-OS-PLATFORM': "iOS",
    'Referer': "http://www.geekbang.org/",
    'X-GEEK-OS-NAME': "iOS",
    'Connection': "keep-alive",
    'Cache-Control': "no-cache",
    }

# 专栏
my_column_url = "https://time.geekbang.org/serv/v1/my/columns"

# 视频专栏
video_url = "https://time.geekbang.org/serv/v1/column/articles"

# 音频专栏
audio_url = "https://time.geekbang.org/serv/v1/column/audios"

# 所有专栏
all_column_url = "https://time.geekbang.org/serv/v1/columns"

# 获取 Chrome cookie
cj = browsercookie.chrome()

JSON_PATH = os.path.join(os.getcwd(), 'json/')
AUDIO_PATH = os.path.join(os.getcwd(), 'audio/')
VIDEO_PATH = os.path.join(os.getcwd(), 'video/')

# mkdir
def make_dir(path):
    try:
        os.mkdir(path)
    except:
        pass

make_dir(JSON_PATH)
make_dir(VIDEO_PATH)
make_dir(AUDIO_PATH)

# 所有专栏
def fetch_all_column():
    payload = "{}"
    response = requests.request("POST", all_column_url, data=payload, cookies=cj, headers=mobile_headers)
    json_data = json.loads(response.content.decode('utf-8'))

    print(json_data)
    data = json_data.get('code')
    if data != 0:
        return

    list = json_data.get('data').get('list')
    my_column = []

    for item in list:
        cid = item.get('id')
        column_unit = item.get('column_unit')
        column_title = item.get('column_title')
        had_sub = item.get('had_sub')
        is_include_audio = item.get('is_include_audio')

        message = "id = %s    has_audio = %s    column_unit = %s    column_title = %s" % (cid, is_include_audio, column_unit,  column_title)
        print(my_column)

        if had_sub:
            my_column.append(message)
    print("-" * 40)
    print("had sub:")
    print(my_column)

def column_type_string(column_type):
    return {
            1 : "audio",
            3 : "video",
            }.get(column_type, "other")

# 获取我的专栏
def fetch_my_column():
    payload = "{}"
    #response = requests.request("POST", my_column_url, data=payload, cookies=cj, headers=mobile_headers)
    response = requests.request("POST", my_column_url, data=payload, headers=mobile_headers)
    json_data = json.loads(response.content.decode('utf-8'))

    print(json_data)
    data = json_data.get('code')
    if data != 0:
        return

    list = json_data.get('data').get('list')

    for item in list:
        id = item.get('id')
        column_type = item.get('column_type')
        column_title = item.get('column_title')
        print("id = %s  type = %s  column_title = %s" % (id, column_type_string(column_type), column_title))

# 根据专栏 id 获取视频
def download_video_by_cid(cid, size):
    payload = " {\"cid\":%d,\"size\":%d,\"prev\":%d,\"order\":\"earliest\"}" % (cid, size, 0)
    response = requests.request("POST", video_url, data=payload, cookies=cj, headers=mobile_headers)
    print(response.content.decode('utf-8'))
    download_videos(response)

def download_videos(response):
    json_data = json.loads(response.content.decode('utf-8'))
    print(json_data)
    data = json_data.get('code')
    if data != 0:
        return

    list = json_data.get('data').get('list')

    for item in list:
        video_media = item.get('video_media')
        article_title = item.get('article_title')

        pattern = ' |\|'
        article_title = re.sub(pattern, '_', article_title)
        print(article_title)
        print(video_media)
        if len(video_media) > 0:
            video = json.loads(video_media)
            video_path = VIDEO_PATH + article_title +'.mp4'
            m3u8 = video.get('hd').get('url')
            cmd = 'ffmpeg -y -i %s %s' % (m3u8, video_path)
            os.system(cmd.encode('utf-8'))

# 根据专栏 id 获取音频
def download_audio_by_cid(cid, size):
    payload = " {\"cid\":%d,\"size\":%d,\"prev\":%d,\"order\":\"newest\"}" % (cid, size, 0)
    response = requests.request("POST", audio_url, data=payload, cookies=cj, headers=mobile_headers)
    download_audio(response)

def download_json(json_data, file_name):
    json_path = JSON_PATH + file_name + '.json'

    # save json file
    with open(json_path, 'wt') as f:
        # unicode
        json_string = json.dumps(json_data, sort_keys=False, ensure_ascii=False, indent=4)
        f.write(json_string)
        print("save : {}.json".format(file_name))
        f.close()

def download_one_audio(audio_download_url, article_sharetitle):
    if len(audio_download_url) > 0:
        print(audio_download_url)
        mp3_path = AUDIO_PATH + article_sharetitle +'.mp3'
        cmd = "wget -c %s -O %s" % (audio_download_url, mp3_path)
        os.system(cmd.encode('utf-8'))

def download_audio(response):
    json_data = json.loads(response.content.decode('utf-8'))
    print(json_data)
    data = json_data.get('code')
    if data != 0:
        return

    list = json_data.get('data').get('list')

    for item in list:
        audio_download_url = item.get('audio_download_url')
        article_sharetitle = item.get('article_sharetitle')

        pattern = ' |\|'
        article_sharetitle = re.sub(pattern, '_', article_sharetitle)
        print(article_sharetitle)

        download_one_audio(audio_download_url, article_sharetitle)

def exec_audio():
    cid = int(input("input audio column id:\n> "))
    download_audio_by_cid(cid, default_size)


def exec_video():
    cid = int(input("input video column id:\n> "))
    download_video_by_cid(cid, default_size)

print("login 'https://geekbang.org' from chrome first")
print("put your Coookie to header: line 10")

if __name__ == "__main__":
    """ 下载音频
    cid = 50
    size = 100
    download_audio_by_cid(cid, size)
    fetch_my_column()
    """

    """ 下载视频
    cid = 77
    size = 100
    download_video_by_cid(cid, size)
    """

    """ 查看所有专栏
    """
    fetch_all_column()

    """ 查看我的专栏
    fetch_my_column()
    """
