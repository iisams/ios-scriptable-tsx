import {request, ResponseType} from '@app/lib/help'
import {h} from '../lib/jsx-runtime'

export interface BiliUpData {
  code: number
  message: string
  ttl: number
  data: {
    mid: number
    following: number
    whisper: number
    black: number
    follower: 2242
  }
}

class MyWidget {
  async init() {
    // if (!config.runsInWidget) return
    const widget = ((await this.render()) as unknown) as ListWidget
    Script.setWidget(widget)
    widget.presentMedium()
    Script.complete()
  }

  //渲染组件
  async render() {
    // 响应数据
    const getUpDataRes = (await this.getUpData(83540912)).data as BiliUpData

    // 粉丝数
    const followers = getUpDataRes?.data.following as number

    // 粉丝数文字
    const FollowerText = () => {
      if (getUpDataRes?.code != 0) {
        return (
          <wtext textAlign="center" textColor={new Color('#fb7299')} font={Font.systemFont(14)}>
            请填写B站MID
          </wtext>
        )
      } else {
        return (
          <wtext
            textAlign="center"
            textColor={new Color('#fb7299')}
            font={Font.boldRoundedSystemFont(this.getFontsize(followers))}
          >
            {this.toThousands(followers)}
          </wtext>
        )
      }
    }

    // 渲染
    return (
      <wbox href="bilibili://">
        <wstack>
          <wimage src="https://www.bilibili.com/favicon.ico" width={15} height={15}></wimage>
          <wtext opacity={0.9} font={Font.systemFont(14)}>
            哔哩哔哩粉丝
          </wtext>
        </wstack>
        <wspacer length={20}></wspacer>
        <FollowerText></FollowerText>
        <wspacer length={20}></wspacer>
        <wtext font={Font.systemFont(12)} textAlign="center" opacity={0.5}>
          更新于:{this.nowTime}
        </wtext>
      </wbox>
    )
  }

  // 获取b站up数据
  async getUpData(id: number): Promise<ResponseType<BiliUpData>> {
    return await request<BiliUpData>({
      url: `http://api.bilibili.com/x/relation/stat?vmid=${id}`,
      dataType: 'json',
    })
  }

  //格式化粉丝数量，加入千分号
  toThousands(num: number): string {
    return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
  }

  //根据粉丝数量返回不同的字体大小
  getFontsize(num: number) {
    if (num < 99) {
      return 38
    } else if (num < 9999 && num > 100) {
      return 30
    } else if (num < 99999 && num > 10000) {
      return 28
    } else if (num < 999999 && num > 100000) {
      return 24
    } else if (num < 9999999 && num > 1000000) {
      return 22
    } else {
      return 20
    }
  }

  //当前时间
  nowTime(): string {
    const date = new Date()
    return date.toLocaleTimeString('chinese', {hour12: false})
  }
}
new MyWidget().init()