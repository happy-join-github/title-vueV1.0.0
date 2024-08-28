//板块
//大模块的分模块
const model = {
  乘法口诀: {
    path: '/koujue',
    data: ['基础版本求两个数的积', '进阶版本求一个因数'],
    data_path: {
      基础版本求两个数的积: '/baseProject/',
      进阶版本求一个因数: '/advancedProject'
    }
  },
  语文: {
    path: '/chinese',
    data: ['阅读理解', '生词听写', '日积月累', '作文'],
    data_path: {
      阅读理解: '/readUnderstand',
      生词听写: '/newWordForWrite',
      日积月累: '/accumulation',
      作文: '/write'
    }
  },
  数学: {
    path: '/math',
    data: ['每日一练', '100以内的混合运算', '应用题', '退位减法', '进位加法',],
    data_path: {
      '100以内的混合运算': '',
      应用题: '',
      退位减法: '',
      进位加法: '',
      '每日一练': '/dailyPractice'
    }
  },
  英语: {
    path: '/english',
    data: ['认识26个英文字母'],
    data_path: {
      认识26个英文字母: ''
    }
  }
}

export const modelResult = { model }
