export interface IBasicInfo{
  company: string,
  department: string,
  position: string,
  staffId: string,
  username: string,
}

export interface ISns{
  s_sn: string,
  u_sn: string,
  d_sn: string,
  c_sn: string,
}

export interface ITokens{
  login: string,
}

export interface IContactInfo{
  email: string;
  mobile: string;
}

export interface IAdditionalInfo{
  nickname?: string,
  serveUnit?: string,
  arriveData?: Date;
}

export interface IUserInfo{
  company: string,
  department: string,
  position: string,
  staffId: string,
  username: string,
  sns?: ISns,
  contactInfo?: IContactInfo,
  additionalInfo?: IAdditionalInfo,
  tokens?: ITokens,
  // s_sn: string,
  // u_sn: string,
  // d_sn: string,
  // c_sn: string,
  // loginToken: string,
  nickname?: string,
  // contactInfo?: string,
}

export class CUserInfo implements IUserInfo{
  readonly company: string;
  readonly department: string;
  readonly position: string;
  readonly staffId: string;
  readonly username: string;
  sns?: ISns;
  contactInfo?: IContactInfo;
  additionalInfo?: IAdditionalInfo;
  tokens?: ITokens;

  // readonly s_sn: string;
  // readonly u_sn: string;
  // readonly d_sn: string;
  // readonly c_sn: string;
  // readonly loginToken: string

  constructor(props: any, sns?:ISns, contactInfo?: IContactInfo, additionalInfo?: IAdditionalInfo){
    this.company = props.company ?? '易勝資訊';
    this.department = props.department ?? '委外事業一部';
    this.position = props.position ?? '助理工程師';
    this.staffId = props.staffId ?? '';
    this.username = props.username ?? '';

    // this.sns = sns ?? {
    //   s_sn: '',
    //   u_sn: '',
    //   d_sn: '',
    //   c_sn: '',
    // }
    // this.contactInfo = contactInfo ?? {
    //   email: '',
    //   mobile: '',
    // }
    // this.additionalInfo = additionalInfo ?? {
    //   nickname: '',
    //   arriveData: new Date(1663603200)
    // }
    // this.s_sn = props.s_sn ?? '';
    // this.u_sn = props.u_sn ?? '';
    // this.d_sn = props.d_sn ?? '25465';
    // this.c_sn = props.c_sn ?? '6607';
    // this.loginToken = props.loginToken ?? '';
  }
}

/* The UserInfo
  CUserInfo {
    company: undefined,
    department: '委外事業一部',
    position: '助理工程師',
    staffId: 'R0203',
    username: '陳居仲',
    "s_sn": "208428",
    "u_sn": "208996",
    "d_sn": "25465",
    "c_sn": "6607",
    loginToken: '91327634c768f51e124d5de1d408c37d18c5c7739a26f3d4d161728d8e595052'
  }
*/

const fake = {
  company: "易勝資訊",
  department: "委外事業一部",
  headshotPosition: "助理工程師",
  memberId: "R0203",    // u_no: 通訊錄
  username: "陳居仲"
}

// getUserDeptMap List
const Sns = {
  "208996": {
    "s_sn": "208428",   // StaffId: 操作用這個
    "u_sn": "208996",   // UserId: 假期 Resource 會顯示
    "c_sn": "6607",     // CompanyId: Home
    "d_sn": "25465",    // dept_id:
    "g_sn": "0",
    "u_title": "83594",
    "start_date": "2021-04-01",
    "end_date": "0000-00-00",
    "c_name": "陳居仲",
    "d_name": "委外事業一部",
    "title_name": "助理工程師"
  },
}

const contact = {
  "pic": "<img src=\"/shared/avatar?params=szrpyE856YEy7sVcknG9tJkZiHt3K2OGJXy-PMonZBVkWw-iLLoJZGuIlYznzNHE\" class=\"avatar show-image \" style=\"width: 30px; height: 30px;\" alt=\"avatar\" onerror=\"imgError(this);\">",
  "u_no": "R0203",
  "name": "陳居仲",
  "dept": "委外事業一部",
  "position": "助理工程師",
  "email": "owesdexter2011@gmail.com",
  "mobile": "0928039477"
};

const personal_leave = {
  "usr_name": "陳居仲",
  "u_sn": 208996,
  "u_no": "R0203",
  "dept": "委外事業一部",
  "title": "助理工程師",
}


/*  GET Page 假期查詢
<div id="myinfo" class="hide">
  <input type="hidden" id="my_deptsn" value="208428">
  <input type="hidden" id="my_dept" value="25465">
  <input type="hidden" id="my_cmpny" value="6607">
  <input type="hidden" id="my_sn" value="208996">
  <input type="hidden" id="allowApplyForOther" value="0">
</div>
*/

/* Search Cookies Index
  假期: {
    Search_44_FLayer=6607;
    Search_44_SLayer=6607_25465;
    Search_44_TLayer=6607_25465_208428;
    Search_44_ov2leaveCombineSwitch=on;
    Search_44_ov2leaveCombine=on;
    Search_44_filter_mode=0;
    Search_44_displayDetail=off
  }
  通訊錄: {
    Search_53_FLayer=6607;
    Search_53_SLayer=6607_0;
    Search_53_TLayer=6607_0_0
  }
*/

/* JWT
  {
    "s_sn": "208428",
    "u_sn": "208996",
    "d_sn": "25465",
    "c_sn": "6607"
  }
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzX3NuIjoiMjA4NDI4IiwidV9zbiI6IjIwODk5NiIsImRfc24iOiIyNTQ2NSIsImNfc24iOiI2NjA3In0.NPkcumxUjeIFPjg2ZBzXcMQ0CAqVmVx1z_5dC7vNEsw

  {
    "s_sn": "208428"
  }
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzX3NuIjoiMjA4NDI4In0.b6KpkgHRGxJIOqvNADJKsOzqNQmNnZp2EI390rJPDH4
*/

/**
 * {
    "code": 200,
    "data": [
        {
            "usr_name": "陳居仲",
            "u_sn": 208996,
            "u_no": "R0203",
            "dept": "委外事業一部",
            "title": "助理工程師",
            "v_resource": [
                {
                    "time_period": "2021-10-01~2022-03-31",
                    "period_s_date": "2021-10-01",
                    "period_e_date": "2022-03-31",
                    "ava_hours": 0,
                    "ava_time": 0,
                    "remain_hours": 0,
                    "remain_time": 0,
                    "prev_left": 0,
                    "prev_left_time": 0,
                    "used_hours": 8,
                    "used_time": 480,
                    "resource_hours": 24,
                    "resource_time": 1440,
                    "pending_hours": 0,
                    "pending_time": 0,
                    "pending_cancel_hours": 0,
                    "pending_cancel_time": 0,
                    "pending_total_hours": 0,
                    "pending_total_time": 0,
                    "accounted_hours": 16,
                    "accounted_time": 960,
                    "accounting_hours": 0,
                    "accounting_time": 0,
                    "pending_cancel_total_hours": 0,
                    "pending_cancel_total_time": 0,
                    "accounted_hours_hrmin": "16時0分",
                    "accounting_hours_hrmin": "0分",
                    "ava_hours_hrmin": "0分",
                    "remain_hours_hrmin": "0分",
                    "prev_left_hrmin": "0分",
                    "resource_hours_hrmin": "24時0分",
                    "used_hours_hrmin": "8時0分",
                    "used_total_hours": 8,
                    "pending_hours_hrmin": "0分",
                    "pending_total_hours_hrmin": "0分",
                    "pending_cancel_hours_hrmin": "0分",
                    "display": "2",
                    "warning": 0,
                    "daysbefore": -1,
                    "remainpercent": 0,
                    "v_sn": 166587,
                    "v_name": "特休",
                    "v_type": "1",
                    "resource_pending_hours_hrmin": "0分",
                    "used_total_hours_hrmin": "8時0分"
                },
                {
                    "time_period": "2022-04-01~2023-03-31",
                    "period_s_date": "2022-04-01",
                    "period_e_date": "2023-03-31",
                    "ava_hours": 56,
                    "ava_time": 3360,
                    "remain_hours": 56,
                    "remain_time": 3360,
                    "prev_left": 0,
                    "prev_left_time": 0,
                    "used_hours": 0,
                    "used_time": 0,
                    "resource_hours": 56,
                    "resource_time": 3360,
                    "pending_hours": 0,
                    "pending_time": 0,
                    "pending_cancel_hours": 0,
                    "pending_cancel_time": 0,
                    "pending_total_hours": 0,
                    "pending_total_time": 0,
                    "accounted_hours": 0,
                    "accounted_time": 0,
                    "accounting_hours": 0,
                    "accounting_time": 0,
                    "pending_cancel_total_hours": 0,
                    "pending_cancel_total_time": 0,
                    "accounted_hours_hrmin": "0分",
                    "accounting_hours_hrmin": "0分",
                    "ava_hours_hrmin": "56時0分",
                    "remain_hours_hrmin": "56時0分",
                    "prev_left_hrmin": "0分",
                    "resource_hours_hrmin": "56時0分",
                    "used_hours_hrmin": "0分",
                    "used_total_hours": 0,
                    "pending_hours_hrmin": "0分",
                    "pending_total_hours_hrmin": "0分",
                    "pending_cancel_hours_hrmin": "0分",
                    "display": "2",
                    "warning": 0,
                    "daysbefore": -1,
                    "remainpercent": 0,
                    "v_sn": 166587,
                    "v_name": "特休",
                    "v_type": "1",
                    "resource_pending_hours_hrmin": "0分",
                    "used_total_hours_hrmin": "0分"
                },
                {
                    "display": 2,
                    "warning": 0,
                    "daysbefore": -1,
                    "remainpercent": 0,
                    "time_period": "",
                    "period_s_date": "",
                    "period_e_date": "",
                    "prev_left": 0,
                    "accounted_hours": 44.5,
                    "accounting_hours": 0,
                    "used_hours": "-",
                    "resource_hours": 44.5,
                    "pending_hours": 0,
                    "v_sn": -1,
                    "v_name": "加班(換加班費)",
                    "v_type": "3",
                    "ava_hours": 0,
                    "remain_hours": 0,
                    "resource_hours_hrmin": "44時30分",
                    "remain_hours_hrmin": "0分",
                    "accounting_hours_hrmin": "0分",
                    "pending_hours_hrmin": "0分",
                    "used_hours_hrmin": "0分",
                    "accounted_hours_hrmin": "44時30分",
                    "ava_hours_hrmin": "0分",
                    "prev_left_hrmin": "0分"
                },
                {
                    "v_sn": 166575,
                    "v_type": "1",
                    "v_name": "病假",
                    "display": "2",
                    "warning": 0,
                    "daysbefore": -1,
                    "remainpercent": 0,
                    "time_period": "2021-04-01~2022-03-31",
                    "period_s_date": "2021-04-01",
                    "period_e_date": "2022-03-31",
                    "resource_hours": 720,
                    "surplus_resource_hours": 720,
                    "prev_left": "-",
                    "used_hours": 0,
                    "pending_hours": 0,
                    "pending_cancel_hours": 0,
                    "accounted_hours": "-",
                    "accounting_hours": 0,
                    "bind_info": {
                        "has_bind": true,
                        "leave_name": "",
                        "used_hours": 0,
                        "pending_hours": 0,
                        "pending_hours_hrmin": "0分",
                        "used_hours_hrmin": "0分"
                    },
                    "ava_hours": 720,
                    "remain_hours": 720,
                    "resource_hours_hrmin": "720時0分",
                    "surplus_resource_hours_hrmin": "720時0分",
                    "remain_hours_hrmin": "720時0分",
                    "accounting_hours_hrmin": "0分",
                    "pending_hours_hrmin": "0分",
                    "pending_cancel_hours_hrmin": "0分",
                    "used_hours_hrmin": "0分",
                    "accounted_hours_hrmin": "0分",
                    "ava_hours_hrmin": "720時0分",
                    "used_total_hours": 0,
                    "used_total_hours_hrmin": "0分"
                },
                {
                    "v_sn": 166575,
                    "v_type": "1",
                    "v_name": "病假",
                    "display": "2",
                    "warning": 0,
                    "daysbefore": -1,
                    "remainpercent": 0,
                    "time_period": "2022-04-01~2023-03-31",
                    "period_s_date": "2022-04-01",
                    "period_e_date": "2023-03-31",
                    "resource_hours": 720,
                    "surplus_resource_hours": 720,
                    "prev_left": "-",
                    "used_hours": 0,
                    "pending_hours": 0,
                    "pending_cancel_hours": 0,
                    "accounted_hours": "-",
                    "accounting_hours": 0,
                    "bind_info": {
                        "has_bind": true,
                        "leave_name": "",
                        "used_hours": 0,
                        "pending_hours": 0,
                        "pending_hours_hrmin": "0分",
                        "used_hours_hrmin": "0分"
                    },
                    "ava_hours": 720,
                    "remain_hours": 720,
                    "resource_hours_hrmin": "720時0分",
                    "surplus_resource_hours_hrmin": "720時0分",
                    "remain_hours_hrmin": "720時0分",
                    "accounting_hours_hrmin": "0分",
                    "pending_hours_hrmin": "0分",
                    "pending_cancel_hours_hrmin": "0分",
                    "used_hours_hrmin": "0分",
                    "accounted_hours_hrmin": "0分",
                    "ava_hours_hrmin": "720時0分",
                    "used_total_hours": 0,
                    "used_total_hours_hrmin": "0分"
                },
                {
                    "v_sn": 166578,
                    "v_type": "1",
                    "v_name": "家庭照顧假",
                    "display": "2",
                    "warning": 0,
                    "daysbefore": -1,
                    "remainpercent": 0,
                    "time_period": "2021-04-01~2022-03-31",
                    "period_s_date": "2021-04-01",
                    "period_e_date": "2022-03-31",
                    "resource_hours": 56,
                    "surplus_resource_hours": 56,
                    "prev_left": "-",
                    "used_hours": 0,
                    "pending_hours": 0,
                    "pending_cancel_hours": 0,
                    "accounted_hours": "-",
                    "accounting_hours": 0,
                    "bind_info": {
                        "has_bind": false,
                        "leave_name": "",
                        "used_hours": 0,
                        "pending_hours": 0,
                        "pending_hours_hrmin": "0分",
                        "used_hours_hrmin": "0分"
                    },
                    "ava_hours": 56,
                    "remain_hours": 56,
                    "resource_hours_hrmin": "56時0分",
                    "surplus_resource_hours_hrmin": "56時0分",
                    "remain_hours_hrmin": "56時0分",
                    "accounting_hours_hrmin": "0分",
                    "pending_hours_hrmin": "0分",
                    "pending_cancel_hours_hrmin": "0分",
                    "used_hours_hrmin": "0分",
                    "accounted_hours_hrmin": "0分",
                    "ava_hours_hrmin": "56時0分",
                    "used_total_hours": 0,
                    "used_total_hours_hrmin": "0分"
                },
                {
                    "v_sn": 166578,
                    "v_type": "1",
                    "v_name": "家庭照顧假",
                    "display": "2",
                    "warning": 0,
                    "daysbefore": -1,
                    "remainpercent": 0,
                    "time_period": "2022-04-01~2023-03-31",
                    "period_s_date": "2022-04-01",
                    "period_e_date": "2023-03-31",
                    "resource_hours": 56,
                    "surplus_resource_hours": 56,
                    "prev_left": "-",
                    "used_hours": 0,
                    "pending_hours": 0,
                    "pending_cancel_hours": 0,
                    "accounted_hours": "-",
                    "accounting_hours": 0,
                    "bind_info": {
                        "has_bind": false,
                        "leave_name": "",
                        "used_hours": 0,
                        "pending_hours": 0,
                        "pending_hours_hrmin": "0分",
                        "used_hours_hrmin": "0分"
                    },
                    "ava_hours": 56,
                    "remain_hours": 56,
                    "resource_hours_hrmin": "56時0分",
                    "surplus_resource_hours_hrmin": "56時0分",
                    "remain_hours_hrmin": "56時0分",
                    "accounting_hours_hrmin": "0分",
                    "pending_hours_hrmin": "0分",
                    "pending_cancel_hours_hrmin": "0分",
                    "used_hours_hrmin": "0分",
                    "accounted_hours_hrmin": "0分",
                    "ava_hours_hrmin": "56時0分",
                    "used_total_hours": 0,
                    "used_total_hours_hrmin": "0分"
                },
                {
                    "v_sn": 166579,
                    "v_type": "1",
                    "v_name": "公假",
                    "display": "2",
                    "warning": 0,
                    "daysbefore": -1,
                    "remainpercent": 0,
                    "time_period": "2022-01-01~2022-12-31",
                    "period_s_date": "2022-01-01",
                    "period_e_date": "2022-12-31",
                    "resource_hours": "-",
                    "surplus_resource_hours": 0,
                    "prev_left": "-",
                    "used_hours": 0,
                    "pending_hours": 0,
                    "pending_cancel_hours": 0,
                    "accounted_hours": "-",
                    "accounting_hours": 0,
                    "bind_info": {
                        "has_bind": false,
                        "leave_name": "",
                        "used_hours": 0,
                        "pending_hours": 0,
                        "pending_hours_hrmin": "0分",
                        "used_hours_hrmin": "0分"
                    },
                    "ava_hours": "-",
                    "remain_hours": "-",
                    "resource_hours_hrmin": "0分",
                    "surplus_resource_hours_hrmin": "0分",
                    "remain_hours_hrmin": "0分",
                    "accounting_hours_hrmin": "0分",
                    "pending_hours_hrmin": "0分",
                    "pending_cancel_hours_hrmin": "0分",
                    "used_hours_hrmin": "0分",
                    "accounted_hours_hrmin": "0分",
                    "ava_hours_hrmin": "0分",
                    "used_total_hours": 0,
                    "used_total_hours_hrmin": "0分"
                },
                {
                    "v_sn": 166576,
                    "v_type": "1",
                    "v_name": "事假",
                    "display": "2",
                    "warning": 0,
                    "daysbefore": -1,
                    "remainpercent": 0,
                    "time_period": "2021-04-01~2022-03-31",
                    "period_s_date": "2021-04-01",
                    "period_e_date": "2022-03-31",
                    "resource_hours": 224,
                    "surplus_resource_hours": 224,
                    "prev_left": "-",
                    "used_hours": 0,
                    "pending_hours": 0,
                    "pending_cancel_hours": 0,
                    "accounted_hours": "-",
                    "accounting_hours": 0,
                    "bind_info": {
                        "has_bind": false,
                        "leave_name": "",
                        "used_hours": 0,
                        "pending_hours": 0,
                        "pending_hours_hrmin": "0分",
                        "used_hours_hrmin": "0分"
                    },
                    "ava_hours": 224,
                    "remain_hours": 224,
                    "resource_hours_hrmin": "224時0分",
                    "surplus_resource_hours_hrmin": "224時0分",
                    "remain_hours_hrmin": "224時0分",
                    "accounting_hours_hrmin": "0分",
                    "pending_hours_hrmin": "0分",
                    "pending_cancel_hours_hrmin": "0分",
                    "used_hours_hrmin": "0分",
                    "accounted_hours_hrmin": "0分",
                    "ava_hours_hrmin": "224時0分",
                    "used_total_hours": 0,
                    "used_total_hours_hrmin": "0分"
                },
                {
                    "v_sn": 166576,
                    "v_type": "1",
                    "v_name": "事假",
                    "display": "2",
                    "warning": 0,
                    "daysbefore": -1,
                    "remainpercent": 0,
                    "time_period": "2022-04-01~2023-03-31",
                    "period_s_date": "2022-04-01",
                    "period_e_date": "2023-03-31",
                    "resource_hours": 224,
                    "surplus_resource_hours": 224,
                    "prev_left": "-",
                    "used_hours": 0,
                    "pending_hours": 0,
                    "pending_cancel_hours": 0,
                    "accounted_hours": "-",
                    "accounting_hours": 0,
                    "bind_info": {
                        "has_bind": false,
                        "leave_name": "",
                        "used_hours": 0,
                        "pending_hours": 0,
                        "pending_hours_hrmin": "0分",
                        "used_hours_hrmin": "0分"
                    },
                    "ava_hours": 224,
                    "remain_hours": 224,
                    "resource_hours_hrmin": "224時0分",
                    "surplus_resource_hours_hrmin": "224時0分",
                    "remain_hours_hrmin": "224時0分",
                    "accounting_hours_hrmin": "0分",
                    "pending_hours_hrmin": "0分",
                    "pending_cancel_hours_hrmin": "0分",
                    "used_hours_hrmin": "0分",
                    "accounted_hours_hrmin": "0分",
                    "ava_hours_hrmin": "224時0分",
                    "used_total_hours": 0,
                    "used_total_hours_hrmin": "0分"
                },
                {
                    "v_sn": 610495,
                    "v_type": "1",
                    "v_name": "疫苗假 (不支薪)",
                    "display": "2",
                    "warning": 0,
                    "daysbefore": -1,
                    "remainpercent": 0,
                    "time_period": "2021-04-01~2022-03-31",
                    "period_s_date": "2021-04-01",
                    "period_e_date": "2022-03-31",
                    "resource_hours": 32,
                    "surplus_resource_hours": 32,
                    "prev_left": "-",
                    "used_hours": 0,
                    "pending_hours": 0,
                    "pending_cancel_hours": 0,
                    "accounted_hours": "-",
                    "accounting_hours": 0,
                    "bind_info": {
                        "has_bind": false,
                        "leave_name": "",
                        "used_hours": 0,
                        "pending_hours": 0,
                        "pending_hours_hrmin": "0分",
                        "used_hours_hrmin": "0分"
                    },
                    "ava_hours": 32,
                    "remain_hours": 32,
                    "resource_hours_hrmin": "32時0分",
                    "surplus_resource_hours_hrmin": "32時0分",
                    "remain_hours_hrmin": "32時0分",
                    "accounting_hours_hrmin": "0分",
                    "pending_hours_hrmin": "0分",
                    "pending_cancel_hours_hrmin": "0分",
                    "used_hours_hrmin": "0分",
                    "accounted_hours_hrmin": "0分",
                    "ava_hours_hrmin": "32時0分",
                    "used_total_hours": 0,
                    "used_total_hours_hrmin": "0分"
                },
                {
                    "v_sn": 610495,
                    "v_type": "1",
                    "v_name": "疫苗假 (不支薪)",
                    "display": "2",
                    "warning": 0,
                    "daysbefore": -1,
                    "remainpercent": 0,
                    "time_period": "2022-04-01~2023-03-31",
                    "period_s_date": "2022-04-01",
                    "period_e_date": "2023-03-31",
                    "resource_hours": 32,
                    "surplus_resource_hours": 32,
                    "prev_left": "-",
                    "used_hours": 0,
                    "pending_hours": 0,
                    "pending_cancel_hours": 0,
                    "accounted_hours": "-",
                    "accounting_hours": 0,
                    "bind_info": {
                        "has_bind": false,
                        "leave_name": "",
                        "used_hours": 0,
                        "pending_hours": 0,
                        "pending_hours_hrmin": "0分",
                        "used_hours_hrmin": "0分"
                    },
                    "ava_hours": 32,
                    "remain_hours": 32,
                    "resource_hours_hrmin": "32時0分",
                    "surplus_resource_hours_hrmin": "32時0分",
                    "remain_hours_hrmin": "32時0分",
                    "accounting_hours_hrmin": "0分",
                    "pending_hours_hrmin": "0分",
                    "pending_cancel_hours_hrmin": "0分",
                    "used_hours_hrmin": "0分",
                    "accounted_hours_hrmin": "0分",
                    "ava_hours_hrmin": "32時0分",
                    "used_total_hours": 0,
                    "used_total_hours_hrmin": "0分"
                }
            ],
            "userDetail": {
                "208996": {
                    "d_sn": "25465",
                    "dept_name": "委外事業一部",
                    "title_name": "助理工程師"
                }
            }
        }
    ]
}
 */
