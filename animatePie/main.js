const chartDom = document.getElementById('main');
const myChart = echarts.init(chartDom);
const chartDom1 = document.getElementById('main1');
const myChart1 = echarts.init(chartDom1);

let option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    show: false,
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['41%', '83%'],
      center: ['50%', '50.5%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine', itemStyle: {
          color: '#00EDD1'
        }, },
        { value: 735, name: 'Direct', itemStyle: {
          color: '#00EDD1',
          opacity: 0.8
        }, },
        { value: 580, name: 'Email', itemStyle: {
          color: '#00EDD1',
          opacity: 0.6
        }, },
        { value: 484, name: 'Union Ads', itemStyle: {
          color: '#00EDD1',
          opacity: 0.4
        }, },
        { value: 300, name: 'Video Ads', itemStyle: {
          color: '#00EDD1',
          opacity: 0.2
        }, }
      ]
    }
  ]
}

myChart.setOption(option);
myChart1.setOption(option);
