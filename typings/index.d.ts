declare class SDK {
  constructor(opts?: Options);

  base: string;
  token: string | (() => string);
  auth: string;

  project: ProjectAPI;
  ticket: TicketAPI;
  action: ActionAPI;
  milestone: MilestoneAPI;
  board: BoardAPI;
  statistics: StatisticsAPI;
}

export interface Options {
  base?: string;
  token?: string | (() => string);
}

export interface ProjectAPI {
  /**
   * List all projects
   */
  listProjects(req: ListProjectsRequest): Promise<ListProjectsResponse>;
  /**
   * Create a project
   */
  createProject(req: CreateProjectRequest): Promise<CreateProjectResponse>;
  /**
   * Find project by id
   */
  getProject(req: GetProjectRequest): Promise<GetProjectResponse>;
  /**
   * Update project
   */
  updateProject(req: UpdateProjectRequest): Promise<UpdateProjectResponse>;
  /**
   * Delete project
   */
  deleteProject(req: DeleteProjectRequest): Promise<void>;
  /**
   * add member for project
   */
  addProjectMember(req: AddProjectMemberRequest): Promise<AddProjectMemberResponse>;
  /**
   * remove member for project
   */
  deleteProjectMember(req: DeleteProjectMemberRequest): Promise<void>;
}
export interface TicketAPI {
  /**
   * List all tickets
   */
  listTickets(req: ListTicketsRequest): Promise<ListTicketsResponse>;
  /**
   * Create a ticket
   */
  createTicket(req: CreateTicketRequest): Promise<CreateTicketResponse>;
  /**
   * Find ticket by id
   */
  getTicket(req: GetTicketRequest): Promise<GetTicketResponse>;
  /**
   * Update ticket
   */
  updateTicket(req: UpdateTicketRequest): Promise<UpdateTicketResponse>;
  /**
   * Delete ticket
   */
  deleteTicket(req: DeleteTicketRequest): Promise<void>;
  /**
   * take ticket
   */
  takeTicket(req: TakeTicketRequest): Promise<TakeTicketResponse>;
  /**
   * untake ticket
   */
  untakeTicket(req: UntakeTicketRequest): Promise<UntakeTicketResponse>;
  /**
   * close ticket
   */
  closeTicket(req: CloseTicketRequest): Promise<CloseTicketResponse>;
  /**
   * reopen ticket
   */
  reopenTicket(req: ReopenTicketRequest): Promise<ReopenTicketResponse>;
}
export interface ActionAPI {
  /**
   * List all actions
   */
  listActions(req: ListActionsRequest): Promise<ListActionsResponse>;
  /**
   * create an action to drive ticket in the flows
   */
  createAction(req: CreateActionRequest): Promise<CreateActionResponse>;
}
export interface MilestoneAPI {
  /**
   * List all milestones
   */
  listMilestones(req: ListMilestonesRequest): Promise<ListMilestonesResponse>;
  /**
   * Create a milestone
   */
  createMilestone(req: CreateMilestoneRequest): Promise<CreateMilestoneResponse>;
  /**
   * Find milestone by id
   */
  getMilestone(req: GetMilestoneRequest): Promise<GetMilestoneResponse>;
  /**
   * Update milestone
   */
  updateMilestone(req: UpdateMilestoneRequest): Promise<UpdateMilestoneResponse>;
  /**
   * Delete milestone
   */
  deleteMilestone(req: DeleteMilestoneRequest): Promise<void>;
}
export interface BoardAPI {
  /**
   * get a board
   */
  getBoard(req: GetBoardRequest): Promise<GetBoardResponse>;
}
export interface StatisticsAPI {
  /**
   * Statistics tickets
   */
  getTicketsStatistics(req: GetTicketsStatisticsRequest): Promise<GetTicketsStatisticsResponse>;
}

export interface ListProjectsRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string[];
    owner?: string;
    name_like?: string;
    pm?: string;
    stage?: string;
    state?: "OPEN" | "CLOSED";
  };
}
export interface ListProjectsResponse {
  body: ({
    /**
     * 项目实际开始激活的时间
     */
    activeAt?: Date;
    /**
     * 项目实际关闭时间
     */
    closeAt?: Date;
    /**
     * 项目描述
     */
    description?: string;
    /**
     * 计划结束时间
     */
    endAt?: Date;
    /**
     * 行业
     */
    industry?: string;
    /**
     * 标签
     */
    labels?: string[];
    /**
     * 项目logo
     */
    logo?: string;
    /**
     * 协作者
     */
    members?: string[];
    /**
     * 项目名称
     */
    name?: string;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 项目负责人 (userId)
     */
    owner?: string;
    /**
     * 项目管理人员 userid
     */
    pm?: string[];
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 项目阶段
     */
    stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
    /**
     * 计划开始时间
     */
    startAt?: Date;
    /**
     * 项目状态
     */
    state?: "OPEN" | "CLOSED";
    /**
     * 文档摘要，可以用于简介或者目录
     */
    summary?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 项目名称
     */
    name: string;
    /**
     * 项目负责人 (userId)
     */
    owner: string;
    /**
     * 项目状态
     */
    state: "OPEN" | "CLOSED";
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface CreateProjectRequest {
  /**
   * 项目创建文档
   */
  body: {
    /**
     * 项目描述
     */
    description?: string;
    /**
     * 计划结束时间
     */
    endAt?: Date;
    /**
     * 行业
     */
    industry?: string;
    /**
     * 标签
     */
    labels?: string[];
    /**
     * 项目logo
     */
    logo?: string;
    /**
     * 协作者
     */
    members?: string[];
    /**
     * 项目名称
     */
    name?: string;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 项目负责人 (userId)
     */
    owner?: string;
    /**
     * 项目管理人员 userid
     */
    pm?: string[];
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 项目阶段
     */
    stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
    /**
     * 计划开始时间
     */
    startAt?: Date;
    /**
     * 项目状态
     */
    state?: "OPEN" | "CLOSED";
    /**
     * 文档摘要，可以用于简介或者目录
     */
    summary?: string;
  } & {
    /**
     * 项目名称
     */
    name: string;
    /**
     * 项目负责人 (userId)
     */
    owner: string;
  };
}
export interface CreateProjectResponse {
  /**
   * 项目
   */
  body: {
    /**
     * 项目实际开始激活的时间
     */
    activeAt?: Date;
    /**
     * 项目实际关闭时间
     */
    closeAt?: Date;
    /**
     * 项目描述
     */
    description?: string;
    /**
     * 计划结束时间
     */
    endAt?: Date;
    /**
     * 行业
     */
    industry?: string;
    /**
     * 标签
     */
    labels?: string[];
    /**
     * 项目logo
     */
    logo?: string;
    /**
     * 协作者
     */
    members?: string[];
    /**
     * 项目名称
     */
    name?: string;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 项目负责人 (userId)
     */
    owner?: string;
    /**
     * 项目管理人员 userid
     */
    pm?: string[];
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 项目阶段
     */
    stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
    /**
     * 计划开始时间
     */
    startAt?: Date;
    /**
     * 项目状态
     */
    state?: "OPEN" | "CLOSED";
    /**
     * 文档摘要，可以用于简介或者目录
     */
    summary?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 项目名称
     */
    name: string;
    /**
     * 项目负责人 (userId)
     */
    owner: string;
    /**
     * 项目状态
     */
    state: "OPEN" | "CLOSED";
  };
}
export interface GetProjectRequest {
  projectId: string;
}
export interface GetProjectResponse {
  /**
   * 项目
   */
  body: {
    /**
     * 项目实际开始激活的时间
     */
    activeAt?: Date;
    /**
     * 项目实际关闭时间
     */
    closeAt?: Date;
    /**
     * 项目描述
     */
    description?: string;
    /**
     * 计划结束时间
     */
    endAt?: Date;
    /**
     * 行业
     */
    industry?: string;
    /**
     * 标签
     */
    labels?: string[];
    /**
     * 项目logo
     */
    logo?: string;
    /**
     * 协作者
     */
    members?: string[];
    /**
     * 项目名称
     */
    name?: string;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 项目负责人 (userId)
     */
    owner?: string;
    /**
     * 项目管理人员 userid
     */
    pm?: string[];
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 项目阶段
     */
    stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
    /**
     * 计划开始时间
     */
    startAt?: Date;
    /**
     * 项目状态
     */
    state?: "OPEN" | "CLOSED";
    /**
     * 文档摘要，可以用于简介或者目录
     */
    summary?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 项目名称
     */
    name: string;
    /**
     * 项目负责人 (userId)
     */
    owner: string;
    /**
     * 项目状态
     */
    state: "OPEN" | "CLOSED";
  };
}
export interface UpdateProjectRequest {
  projectId: string;
  /**
   * 项目，工单的最高组织形式
   */
  body: {
    /**
     * 项目描述
     */
    description?: string;
    /**
     * 计划结束时间
     */
    endAt?: Date;
    /**
     * 行业
     */
    industry?: string;
    /**
     * 标签
     */
    labels?: string[];
    /**
     * 项目logo
     */
    logo?: string;
    /**
     * 协作者
     */
    members?: string[];
    /**
     * 项目名称
     */
    name?: string;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 项目负责人 (userId)
     */
    owner?: string;
    /**
     * 项目管理人员 userid
     */
    pm?: string[];
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 项目阶段
     */
    stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
    /**
     * 计划开始时间
     */
    startAt?: Date;
    /**
     * 项目状态
     */
    state?: "OPEN" | "CLOSED";
    /**
     * 文档摘要，可以用于简介或者目录
     */
    summary?: string;
  };
}
export interface UpdateProjectResponse {
  /**
   * 项目
   */
  body: {
    /**
     * 项目实际开始激活的时间
     */
    activeAt?: Date;
    /**
     * 项目实际关闭时间
     */
    closeAt?: Date;
    /**
     * 项目描述
     */
    description?: string;
    /**
     * 计划结束时间
     */
    endAt?: Date;
    /**
     * 行业
     */
    industry?: string;
    /**
     * 标签
     */
    labels?: string[];
    /**
     * 项目logo
     */
    logo?: string;
    /**
     * 协作者
     */
    members?: string[];
    /**
     * 项目名称
     */
    name?: string;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 项目负责人 (userId)
     */
    owner?: string;
    /**
     * 项目管理人员 userid
     */
    pm?: string[];
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 项目阶段
     */
    stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
    /**
     * 计划开始时间
     */
    startAt?: Date;
    /**
     * 项目状态
     */
    state?: "OPEN" | "CLOSED";
    /**
     * 文档摘要，可以用于简介或者目录
     */
    summary?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 项目名称
     */
    name: string;
    /**
     * 项目负责人 (userId)
     */
    owner: string;
    /**
     * 项目状态
     */
    state: "OPEN" | "CLOSED";
  };
}
export interface DeleteProjectRequest {
  projectId: string;
}
export interface AddProjectMemberRequest {
  projectId: string;
  body: {
    /**
     * member
     */
    id: string;
  };
}
export interface AddProjectMemberResponse {
  body: {
    /**
     * member
     */
    id: string;
  };
}
export interface DeleteProjectMemberRequest {
  projectId: string;
  memberId: string;
}
export interface ListTicketsRequest {
  query?: {
    board?: string;
    createBy?: string[];
    labels?: string[];
    lane?: string[];
    _limit?: number;
    milestone?: string[];
    _offset?: number;
    project?: string[];
    _select?: string[];
    _sort?: string;
    state?: "OPEN" | "CLOSED";
    deadline_gte?: Date;
    deadline_lte?: Date;
    level?: (0 | 1 | 2 | 3 | 4 | 5 | 6)[];
    parent?: string[];
    priority?: (0 | 1 | 2)[];
    publishAt_gte?: Date;
    publishAt_lte?: Date;
    publishBy?: string[];
    published?: boolean;
    reopen?: boolean;
    /**
     * ticket risk
     */
    risk?: "RISK_DELAY" | "RISK_URGENCY" | "RISK_RETENTION";
    takeBy?: string[];
    type?: string[];
    title_like?: string;
  };
}
export interface ListTicketsResponse {
  body: ({
    /**
     * 额外奖励
     */
    bonus?: number;
    /**
     * 赏金
     */
    bounty?: number;
    /**
     * 关闭时间
     */
    closeAt?: Date;
    /**
     * ticket 的内容
     */
    content?: string;
    /**
     * 第三方数据
     */
    data?: {
      [k: string]: any;
    };
    /**
     * 截止时间
     */
    deadline?: Date;
    labels?: string[];
    level?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 父级卡片
     */
    parent?: string;
    priority?: 0 | 1 | 2;
    /**
     * 发布时间
     */
    publishAt?: Date;
    /**
     * 发布人 (userId)
     */
    publishBy?: string | null;
    /**
     * 是否被发布
     */
    published?: boolean;
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 备注
     */
    remark?: string;
    /**
     * 是否 reopened 过
     */
    reopen?: boolean;
    reopenAt?: Date;
    /**
     * ticket risk
     */
    risk?: "NO_RISK" | "RISK_DELAY" | "RISK_URGENCY" | "RISK_RETENTION";
    shiftAt?: Date;
    /**
     * project 阶段
     */
    stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
    state?: "OPEN" | "CLOSED";
    /**
     * 领取时间
     */
    takeAt?: Date;
    /**
     * 领取人 (userId)
     */
    takeBy?: string | null;
    /**
     * ticket 的标题
     */
    title?: string;
    /**
     * ticket 的类别
     */
    type?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * ticket 的标题
     */
    title: string;
    /**
     * 当前工单对应的可操作流程
     */
    flows?: ({
      /**
       * 工作流描述
       */
      description?: string;
      /**
       * 工作流名称
       */
      name?: string;
      /**
       * 限制工作流允许操作的角色
       */
      roles?: string[];
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 工作流名称
       */
      name: string;
      fields?: ({
        /**
         * 表单字段描述
         */
        description?: string;
        /**
         * 是否是必须的字段
         */
        required?: boolean;
        /**
         * 表单字段key
         */
        key: string;
        /**
         * 表单字段名称
         */
        name: string;
        /**
         * 表单字段类型
         */
        type: string;
        /**
         * 字段的占位字符
         */
        placeholder?: string;
        /**
         * 表单字段的默认值
         */
        defaultValue?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      })[];
      /**
       * 来源泳道
       */
      from: {
        /**
         * 泳道automations
         */
        automations?: string[];
        /**
         * 泳道描述
         */
        description?: string;
        /**
         * 泳道名称
         */
        name?: string;
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 必须填写的字段
         */
        requires?: string[];
        /**
         * 限制将卡片拖动到该泳道的角色
         */
        roles?: string[];
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 泳道名称
         */
        name: string;
      };
      /**
       * 目标泳道
       */
      to: {
        /**
         * 泳道automations
         */
        automations?: string[];
        /**
         * 泳道描述
         */
        description?: string;
        /**
         * 泳道名称
         */
        name?: string;
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 必须填写的字段
         */
        requires?: string[];
        /**
         * 限制将卡片拖动到该泳道的角色
         */
        roles?: string[];
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 泳道名称
         */
        name: string;
      };
    })[];
    /**
     * 所属泳道
     */
    lane?: {
      /**
       * 泳道automations
       */
      automations?: string[];
      /**
       * 泳道描述
       */
      description?: string;
      /**
       * 泳道名称
       */
      name?: string;
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 必须填写的字段
       */
      requires?: string[];
      /**
       * 限制将卡片拖动到该泳道的角色
       */
      roles?: string[];
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 泳道名称
       */
      name: string;
    };
    /**
     * 所属里程碑
     */
    milestone?: {
      /**
       * 实际里程碑开始激活的时间
       */
      activeAt?: Date;
      /**
       * 实际里程碑关闭时间
       */
      closeAt?: Date;
      /**
       * 里程碑描述
       */
      description?: string;
      /**
       * 计划结束时间
       */
      endAt?: Date;
      /**
       * 里程碑名称
       */
      name?: string;
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 计划开始时间
       */
      startAt?: Date;
      /**
       * 状态
       */
      state?: "OPEN" | "CLOSED";
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 里程碑名称
       */
      name: string;
      /**
       * 关联的project
       */
      project: {
        /**
         * 项目实际开始激活的时间
         */
        activeAt?: Date;
        /**
         * 项目实际关闭时间
         */
        closeAt?: Date;
        /**
         * 项目描述
         */
        description?: string;
        /**
         * 计划结束时间
         */
        endAt?: Date;
        /**
         * 行业
         */
        industry?: string;
        /**
         * 标签
         */
        labels?: string[];
        /**
         * 项目logo
         */
        logo?: string;
        /**
         * 协作者
         */
        members?: string[];
        /**
         * 项目名称
         */
        name?: string;
        /**
         * 所属命名空间
         */
        ns?: string;
        /**
         * 项目负责人 (userId)
         */
        owner?: string;
        /**
         * 项目管理人员 userid
         */
        pm?: string[];
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 项目阶段
         */
        stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
        /**
         * 计划开始时间
         */
        startAt?: Date;
        /**
         * 项目状态
         */
        state?: "OPEN" | "CLOSED";
        /**
         * 文档摘要，可以用于简介或者目录
         */
        summary?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 项目名称
         */
        name: string;
        /**
         * 项目负责人 (userId)
         */
        owner: string;
        /**
         * 项目状态
         */
        state: "OPEN" | "CLOSED";
      };
      /**
       * 状态
       */
      state: "OPEN" | "CLOSED";
    };
    /**
     * 所属项目
     */
    project: {
      /**
       * 项目实际开始激活的时间
       */
      activeAt?: Date;
      /**
       * 项目实际关闭时间
       */
      closeAt?: Date;
      /**
       * 项目描述
       */
      description?: string;
      /**
       * 计划结束时间
       */
      endAt?: Date;
      /**
       * 行业
       */
      industry?: string;
      /**
       * 标签
       */
      labels?: string[];
      /**
       * 项目logo
       */
      logo?: string;
      /**
       * 协作者
       */
      members?: string[];
      /**
       * 项目名称
       */
      name?: string;
      /**
       * 所属命名空间
       */
      ns?: string;
      /**
       * 项目负责人 (userId)
       */
      owner?: string;
      /**
       * 项目管理人员 userid
       */
      pm?: string[];
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 项目阶段
       */
      stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
      /**
       * 计划开始时间
       */
      startAt?: Date;
      /**
       * 项目状态
       */
      state?: "OPEN" | "CLOSED";
      /**
       * 文档摘要，可以用于简介或者目录
       */
      summary?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 项目名称
       */
      name: string;
      /**
       * 项目负责人 (userId)
       */
      owner: string;
      /**
       * 项目状态
       */
      state: "OPEN" | "CLOSED";
    };
    state: "OPEN" | "CLOSED";
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface CreateTicketRequest {
  body: {
    /**
     * 额外奖励
     */
    bonus?: number;
    /**
     * 赏金
     */
    bounty?: number;
    /**
     * 关闭时间
     */
    closeAt?: Date;
    /**
     * ticket 的内容
     */
    content?: string;
    /**
     * 第三方数据
     */
    data?: {
      [k: string]: any;
    };
    /**
     * 截止时间
     */
    deadline?: Date;
    labels?: string[];
    level?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 父级卡片
     */
    parent?: string;
    priority?: 0 | 1 | 2;
    /**
     * 发布时间
     */
    publishAt?: Date;
    /**
     * 发布人 (userId)
     */
    publishBy?: string | null;
    /**
     * 是否被发布
     */
    published?: boolean;
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 备注
     */
    remark?: string;
    /**
     * 是否 reopened 过
     */
    reopen?: boolean;
    reopenAt?: Date;
    /**
     * ticket risk
     */
    risk?: "NO_RISK" | "RISK_DELAY" | "RISK_URGENCY" | "RISK_RETENTION";
    shiftAt?: Date;
    /**
     * project 阶段
     */
    stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
    state?: "OPEN" | "CLOSED";
    /**
     * 领取时间
     */
    takeAt?: Date;
    /**
     * 领取人 (userId)
     */
    takeBy?: string | null;
    /**
     * ticket 的标题
     */
    title?: string;
    /**
     * ticket 的类别
     */
    type?: string;
  } & {
    /**
     * ticket 的标题
     */
    title: string;
    /**
     * 所属看板
     */
    board: string;
    /**
     * 当前工单对应的可操作流程
     */
    flows?: string[];
    /**
     * 所属泳道
     */
    lane?: string;
    /**
     * 所属里程碑
     */
    milestone?: string;
    /**
     * 所属项目
     */
    project: string;
  };
}
export interface CreateTicketResponse {
  /**
   * 工单
   */
  body: {
    /**
     * 额外奖励
     */
    bonus?: number;
    /**
     * 赏金
     */
    bounty?: number;
    /**
     * 关闭时间
     */
    closeAt?: Date;
    /**
     * ticket 的内容
     */
    content?: string;
    /**
     * 第三方数据
     */
    data?: {
      [k: string]: any;
    };
    /**
     * 截止时间
     */
    deadline?: Date;
    labels?: string[];
    level?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 父级卡片
     */
    parent?: string;
    priority?: 0 | 1 | 2;
    /**
     * 发布时间
     */
    publishAt?: Date;
    /**
     * 发布人 (userId)
     */
    publishBy?: string | null;
    /**
     * 是否被发布
     */
    published?: boolean;
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 备注
     */
    remark?: string;
    /**
     * 是否 reopened 过
     */
    reopen?: boolean;
    reopenAt?: Date;
    /**
     * ticket risk
     */
    risk?: "NO_RISK" | "RISK_DELAY" | "RISK_URGENCY" | "RISK_RETENTION";
    shiftAt?: Date;
    /**
     * project 阶段
     */
    stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
    state?: "OPEN" | "CLOSED";
    /**
     * 领取时间
     */
    takeAt?: Date;
    /**
     * 领取人 (userId)
     */
    takeBy?: string | null;
    /**
     * ticket 的标题
     */
    title?: string;
    /**
     * ticket 的类别
     */
    type?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * ticket 的标题
     */
    title: string;
    /**
     * 当前工单对应的可操作流程
     */
    flows?: ({
      /**
       * 工作流描述
       */
      description?: string;
      /**
       * 工作流名称
       */
      name?: string;
      /**
       * 限制工作流允许操作的角色
       */
      roles?: string[];
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 工作流名称
       */
      name: string;
      fields?: ({
        /**
         * 表单字段描述
         */
        description?: string;
        /**
         * 是否是必须的字段
         */
        required?: boolean;
        /**
         * 表单字段key
         */
        key: string;
        /**
         * 表单字段名称
         */
        name: string;
        /**
         * 表单字段类型
         */
        type: string;
        /**
         * 字段的占位字符
         */
        placeholder?: string;
        /**
         * 表单字段的默认值
         */
        defaultValue?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      })[];
      /**
       * 来源泳道
       */
      from: {
        /**
         * 泳道automations
         */
        automations?: string[];
        /**
         * 泳道描述
         */
        description?: string;
        /**
         * 泳道名称
         */
        name?: string;
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 必须填写的字段
         */
        requires?: string[];
        /**
         * 限制将卡片拖动到该泳道的角色
         */
        roles?: string[];
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 泳道名称
         */
        name: string;
      };
      /**
       * 目标泳道
       */
      to: {
        /**
         * 泳道automations
         */
        automations?: string[];
        /**
         * 泳道描述
         */
        description?: string;
        /**
         * 泳道名称
         */
        name?: string;
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 必须填写的字段
         */
        requires?: string[];
        /**
         * 限制将卡片拖动到该泳道的角色
         */
        roles?: string[];
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 泳道名称
         */
        name: string;
      };
    })[];
    /**
     * 所属泳道
     */
    lane?: {
      /**
       * 泳道automations
       */
      automations?: string[];
      /**
       * 泳道描述
       */
      description?: string;
      /**
       * 泳道名称
       */
      name?: string;
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 必须填写的字段
       */
      requires?: string[];
      /**
       * 限制将卡片拖动到该泳道的角色
       */
      roles?: string[];
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 泳道名称
       */
      name: string;
    };
    /**
     * 所属里程碑
     */
    milestone?: {
      /**
       * 实际里程碑开始激活的时间
       */
      activeAt?: Date;
      /**
       * 实际里程碑关闭时间
       */
      closeAt?: Date;
      /**
       * 里程碑描述
       */
      description?: string;
      /**
       * 计划结束时间
       */
      endAt?: Date;
      /**
       * 里程碑名称
       */
      name?: string;
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 计划开始时间
       */
      startAt?: Date;
      /**
       * 状态
       */
      state?: "OPEN" | "CLOSED";
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 里程碑名称
       */
      name: string;
      /**
       * 关联的project
       */
      project: {
        /**
         * 项目实际开始激活的时间
         */
        activeAt?: Date;
        /**
         * 项目实际关闭时间
         */
        closeAt?: Date;
        /**
         * 项目描述
         */
        description?: string;
        /**
         * 计划结束时间
         */
        endAt?: Date;
        /**
         * 行业
         */
        industry?: string;
        /**
         * 标签
         */
        labels?: string[];
        /**
         * 项目logo
         */
        logo?: string;
        /**
         * 协作者
         */
        members?: string[];
        /**
         * 项目名称
         */
        name?: string;
        /**
         * 所属命名空间
         */
        ns?: string;
        /**
         * 项目负责人 (userId)
         */
        owner?: string;
        /**
         * 项目管理人员 userid
         */
        pm?: string[];
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 项目阶段
         */
        stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
        /**
         * 计划开始时间
         */
        startAt?: Date;
        /**
         * 项目状态
         */
        state?: "OPEN" | "CLOSED";
        /**
         * 文档摘要，可以用于简介或者目录
         */
        summary?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 项目名称
         */
        name: string;
        /**
         * 项目负责人 (userId)
         */
        owner: string;
        /**
         * 项目状态
         */
        state: "OPEN" | "CLOSED";
      };
      /**
       * 状态
       */
      state: "OPEN" | "CLOSED";
    };
    /**
     * 所属项目
     */
    project: {
      /**
       * 项目实际开始激活的时间
       */
      activeAt?: Date;
      /**
       * 项目实际关闭时间
       */
      closeAt?: Date;
      /**
       * 项目描述
       */
      description?: string;
      /**
       * 计划结束时间
       */
      endAt?: Date;
      /**
       * 行业
       */
      industry?: string;
      /**
       * 标签
       */
      labels?: string[];
      /**
       * 项目logo
       */
      logo?: string;
      /**
       * 协作者
       */
      members?: string[];
      /**
       * 项目名称
       */
      name?: string;
      /**
       * 所属命名空间
       */
      ns?: string;
      /**
       * 项目负责人 (userId)
       */
      owner?: string;
      /**
       * 项目管理人员 userid
       */
      pm?: string[];
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 项目阶段
       */
      stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
      /**
       * 计划开始时间
       */
      startAt?: Date;
      /**
       * 项目状态
       */
      state?: "OPEN" | "CLOSED";
      /**
       * 文档摘要，可以用于简介或者目录
       */
      summary?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 项目名称
       */
      name: string;
      /**
       * 项目负责人 (userId)
       */
      owner: string;
      /**
       * 项目状态
       */
      state: "OPEN" | "CLOSED";
    };
    state: "OPEN" | "CLOSED";
  };
}
export interface GetTicketRequest {
  ticketId: string;
}
export interface GetTicketResponse {
  /**
   * 工单
   */
  body: {
    /**
     * 额外奖励
     */
    bonus?: number;
    /**
     * 赏金
     */
    bounty?: number;
    /**
     * 关闭时间
     */
    closeAt?: Date;
    /**
     * ticket 的内容
     */
    content?: string;
    /**
     * 第三方数据
     */
    data?: {
      [k: string]: any;
    };
    /**
     * 截止时间
     */
    deadline?: Date;
    labels?: string[];
    level?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 父级卡片
     */
    parent?: string;
    priority?: 0 | 1 | 2;
    /**
     * 发布时间
     */
    publishAt?: Date;
    /**
     * 发布人 (userId)
     */
    publishBy?: string | null;
    /**
     * 是否被发布
     */
    published?: boolean;
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 备注
     */
    remark?: string;
    /**
     * 是否 reopened 过
     */
    reopen?: boolean;
    reopenAt?: Date;
    /**
     * ticket risk
     */
    risk?: "NO_RISK" | "RISK_DELAY" | "RISK_URGENCY" | "RISK_RETENTION";
    shiftAt?: Date;
    /**
     * project 阶段
     */
    stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
    state?: "OPEN" | "CLOSED";
    /**
     * 领取时间
     */
    takeAt?: Date;
    /**
     * 领取人 (userId)
     */
    takeBy?: string | null;
    /**
     * ticket 的标题
     */
    title?: string;
    /**
     * ticket 的类别
     */
    type?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * ticket 的标题
     */
    title: string;
    /**
     * 当前工单对应的可操作流程
     */
    flows?: ({
      /**
       * 工作流描述
       */
      description?: string;
      /**
       * 工作流名称
       */
      name?: string;
      /**
       * 限制工作流允许操作的角色
       */
      roles?: string[];
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 工作流名称
       */
      name: string;
      fields?: ({
        /**
         * 表单字段描述
         */
        description?: string;
        /**
         * 是否是必须的字段
         */
        required?: boolean;
        /**
         * 表单字段key
         */
        key: string;
        /**
         * 表单字段名称
         */
        name: string;
        /**
         * 表单字段类型
         */
        type: string;
        /**
         * 字段的占位字符
         */
        placeholder?: string;
        /**
         * 表单字段的默认值
         */
        defaultValue?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      })[];
      /**
       * 来源泳道
       */
      from: {
        /**
         * 泳道automations
         */
        automations?: string[];
        /**
         * 泳道描述
         */
        description?: string;
        /**
         * 泳道名称
         */
        name?: string;
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 必须填写的字段
         */
        requires?: string[];
        /**
         * 限制将卡片拖动到该泳道的角色
         */
        roles?: string[];
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 泳道名称
         */
        name: string;
      };
      /**
       * 目标泳道
       */
      to: {
        /**
         * 泳道automations
         */
        automations?: string[];
        /**
         * 泳道描述
         */
        description?: string;
        /**
         * 泳道名称
         */
        name?: string;
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 必须填写的字段
         */
        requires?: string[];
        /**
         * 限制将卡片拖动到该泳道的角色
         */
        roles?: string[];
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 泳道名称
         */
        name: string;
      };
    })[];
    /**
     * 所属泳道
     */
    lane?: {
      /**
       * 泳道automations
       */
      automations?: string[];
      /**
       * 泳道描述
       */
      description?: string;
      /**
       * 泳道名称
       */
      name?: string;
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 必须填写的字段
       */
      requires?: string[];
      /**
       * 限制将卡片拖动到该泳道的角色
       */
      roles?: string[];
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 泳道名称
       */
      name: string;
    };
    /**
     * 所属里程碑
     */
    milestone?: {
      /**
       * 实际里程碑开始激活的时间
       */
      activeAt?: Date;
      /**
       * 实际里程碑关闭时间
       */
      closeAt?: Date;
      /**
       * 里程碑描述
       */
      description?: string;
      /**
       * 计划结束时间
       */
      endAt?: Date;
      /**
       * 里程碑名称
       */
      name?: string;
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 计划开始时间
       */
      startAt?: Date;
      /**
       * 状态
       */
      state?: "OPEN" | "CLOSED";
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 里程碑名称
       */
      name: string;
      /**
       * 关联的project
       */
      project: {
        /**
         * 项目实际开始激活的时间
         */
        activeAt?: Date;
        /**
         * 项目实际关闭时间
         */
        closeAt?: Date;
        /**
         * 项目描述
         */
        description?: string;
        /**
         * 计划结束时间
         */
        endAt?: Date;
        /**
         * 行业
         */
        industry?: string;
        /**
         * 标签
         */
        labels?: string[];
        /**
         * 项目logo
         */
        logo?: string;
        /**
         * 协作者
         */
        members?: string[];
        /**
         * 项目名称
         */
        name?: string;
        /**
         * 所属命名空间
         */
        ns?: string;
        /**
         * 项目负责人 (userId)
         */
        owner?: string;
        /**
         * 项目管理人员 userid
         */
        pm?: string[];
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 项目阶段
         */
        stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
        /**
         * 计划开始时间
         */
        startAt?: Date;
        /**
         * 项目状态
         */
        state?: "OPEN" | "CLOSED";
        /**
         * 文档摘要，可以用于简介或者目录
         */
        summary?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 项目名称
         */
        name: string;
        /**
         * 项目负责人 (userId)
         */
        owner: string;
        /**
         * 项目状态
         */
        state: "OPEN" | "CLOSED";
      };
      /**
       * 状态
       */
      state: "OPEN" | "CLOSED";
    };
    /**
     * 所属项目
     */
    project: {
      /**
       * 项目实际开始激活的时间
       */
      activeAt?: Date;
      /**
       * 项目实际关闭时间
       */
      closeAt?: Date;
      /**
       * 项目描述
       */
      description?: string;
      /**
       * 计划结束时间
       */
      endAt?: Date;
      /**
       * 行业
       */
      industry?: string;
      /**
       * 标签
       */
      labels?: string[];
      /**
       * 项目logo
       */
      logo?: string;
      /**
       * 协作者
       */
      members?: string[];
      /**
       * 项目名称
       */
      name?: string;
      /**
       * 所属命名空间
       */
      ns?: string;
      /**
       * 项目负责人 (userId)
       */
      owner?: string;
      /**
       * 项目管理人员 userid
       */
      pm?: string[];
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 项目阶段
       */
      stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
      /**
       * 计划开始时间
       */
      startAt?: Date;
      /**
       * 项目状态
       */
      state?: "OPEN" | "CLOSED";
      /**
       * 文档摘要，可以用于简介或者目录
       */
      summary?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 项目名称
       */
      name: string;
      /**
       * 项目负责人 (userId)
       */
      owner: string;
      /**
       * 项目状态
       */
      state: "OPEN" | "CLOSED";
    };
    state: "OPEN" | "CLOSED";
  };
}
export interface UpdateTicketRequest {
  ticketId: string;
  body: {
    /**
     * 额外奖励
     */
    bonus?: number;
    /**
     * 赏金
     */
    bounty?: number;
    /**
     * 关闭时间
     */
    closeAt?: Date;
    /**
     * ticket 的内容
     */
    content?: string;
    /**
     * 第三方数据
     */
    data?: {
      [k: string]: any;
    };
    /**
     * 截止时间
     */
    deadline?: Date;
    labels?: string[];
    level?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 父级卡片
     */
    parent?: string;
    priority?: 0 | 1 | 2;
    /**
     * 发布时间
     */
    publishAt?: Date;
    /**
     * 发布人 (userId)
     */
    publishBy?: string | null;
    /**
     * 是否被发布
     */
    published?: boolean;
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 备注
     */
    remark?: string;
    /**
     * 是否 reopened 过
     */
    reopen?: boolean;
    reopenAt?: Date;
    /**
     * ticket risk
     */
    risk?: "NO_RISK" | "RISK_DELAY" | "RISK_URGENCY" | "RISK_RETENTION";
    shiftAt?: Date;
    /**
     * project 阶段
     */
    stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
    state?: "OPEN" | "CLOSED";
    /**
     * 领取时间
     */
    takeAt?: Date;
    /**
     * 领取人 (userId)
     */
    takeBy?: string | null;
    /**
     * ticket 的标题
     */
    title?: string;
    /**
     * ticket 的类别
     */
    type?: string;
  } & {
    /**
     * ticket 的标题
     */
    title?: string;
    /**
     * 所属看板
     */
    board?: string;
    /**
     * 当前工单对应的可操作流程
     */
    flows?: string[];
    /**
     * 所属泳道
     */
    lane?: string;
    /**
     * 所属里程碑
     */
    milestone?: string;
    /**
     * 所属项目
     */
    project?: string;
  };
}
export interface UpdateTicketResponse {
  /**
   * 工单
   */
  body: {
    /**
     * 额外奖励
     */
    bonus?: number;
    /**
     * 赏金
     */
    bounty?: number;
    /**
     * 关闭时间
     */
    closeAt?: Date;
    /**
     * ticket 的内容
     */
    content?: string;
    /**
     * 第三方数据
     */
    data?: {
      [k: string]: any;
    };
    /**
     * 截止时间
     */
    deadline?: Date;
    labels?: string[];
    level?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 父级卡片
     */
    parent?: string;
    priority?: 0 | 1 | 2;
    /**
     * 发布时间
     */
    publishAt?: Date;
    /**
     * 发布人 (userId)
     */
    publishBy?: string | null;
    /**
     * 是否被发布
     */
    published?: boolean;
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 备注
     */
    remark?: string;
    /**
     * 是否 reopened 过
     */
    reopen?: boolean;
    reopenAt?: Date;
    /**
     * ticket risk
     */
    risk?: "NO_RISK" | "RISK_DELAY" | "RISK_URGENCY" | "RISK_RETENTION";
    shiftAt?: Date;
    /**
     * project 阶段
     */
    stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
    state?: "OPEN" | "CLOSED";
    /**
     * 领取时间
     */
    takeAt?: Date;
    /**
     * 领取人 (userId)
     */
    takeBy?: string | null;
    /**
     * ticket 的标题
     */
    title?: string;
    /**
     * ticket 的类别
     */
    type?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * ticket 的标题
     */
    title: string;
    /**
     * 当前工单对应的可操作流程
     */
    flows?: ({
      /**
       * 工作流描述
       */
      description?: string;
      /**
       * 工作流名称
       */
      name?: string;
      /**
       * 限制工作流允许操作的角色
       */
      roles?: string[];
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 工作流名称
       */
      name: string;
      fields?: ({
        /**
         * 表单字段描述
         */
        description?: string;
        /**
         * 是否是必须的字段
         */
        required?: boolean;
        /**
         * 表单字段key
         */
        key: string;
        /**
         * 表单字段名称
         */
        name: string;
        /**
         * 表单字段类型
         */
        type: string;
        /**
         * 字段的占位字符
         */
        placeholder?: string;
        /**
         * 表单字段的默认值
         */
        defaultValue?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      })[];
      /**
       * 来源泳道
       */
      from: {
        /**
         * 泳道automations
         */
        automations?: string[];
        /**
         * 泳道描述
         */
        description?: string;
        /**
         * 泳道名称
         */
        name?: string;
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 必须填写的字段
         */
        requires?: string[];
        /**
         * 限制将卡片拖动到该泳道的角色
         */
        roles?: string[];
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 泳道名称
         */
        name: string;
      };
      /**
       * 目标泳道
       */
      to: {
        /**
         * 泳道automations
         */
        automations?: string[];
        /**
         * 泳道描述
         */
        description?: string;
        /**
         * 泳道名称
         */
        name?: string;
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 必须填写的字段
         */
        requires?: string[];
        /**
         * 限制将卡片拖动到该泳道的角色
         */
        roles?: string[];
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 泳道名称
         */
        name: string;
      };
    })[];
    /**
     * 所属泳道
     */
    lane?: {
      /**
       * 泳道automations
       */
      automations?: string[];
      /**
       * 泳道描述
       */
      description?: string;
      /**
       * 泳道名称
       */
      name?: string;
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 必须填写的字段
       */
      requires?: string[];
      /**
       * 限制将卡片拖动到该泳道的角色
       */
      roles?: string[];
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 泳道名称
       */
      name: string;
    };
    /**
     * 所属里程碑
     */
    milestone?: {
      /**
       * 实际里程碑开始激活的时间
       */
      activeAt?: Date;
      /**
       * 实际里程碑关闭时间
       */
      closeAt?: Date;
      /**
       * 里程碑描述
       */
      description?: string;
      /**
       * 计划结束时间
       */
      endAt?: Date;
      /**
       * 里程碑名称
       */
      name?: string;
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 计划开始时间
       */
      startAt?: Date;
      /**
       * 状态
       */
      state?: "OPEN" | "CLOSED";
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 里程碑名称
       */
      name: string;
      /**
       * 关联的project
       */
      project: {
        /**
         * 项目实际开始激活的时间
         */
        activeAt?: Date;
        /**
         * 项目实际关闭时间
         */
        closeAt?: Date;
        /**
         * 项目描述
         */
        description?: string;
        /**
         * 计划结束时间
         */
        endAt?: Date;
        /**
         * 行业
         */
        industry?: string;
        /**
         * 标签
         */
        labels?: string[];
        /**
         * 项目logo
         */
        logo?: string;
        /**
         * 协作者
         */
        members?: string[];
        /**
         * 项目名称
         */
        name?: string;
        /**
         * 所属命名空间
         */
        ns?: string;
        /**
         * 项目负责人 (userId)
         */
        owner?: string;
        /**
         * 项目管理人员 userid
         */
        pm?: string[];
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 项目阶段
         */
        stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
        /**
         * 计划开始时间
         */
        startAt?: Date;
        /**
         * 项目状态
         */
        state?: "OPEN" | "CLOSED";
        /**
         * 文档摘要，可以用于简介或者目录
         */
        summary?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 项目名称
         */
        name: string;
        /**
         * 项目负责人 (userId)
         */
        owner: string;
        /**
         * 项目状态
         */
        state: "OPEN" | "CLOSED";
      };
      /**
       * 状态
       */
      state: "OPEN" | "CLOSED";
    };
    /**
     * 所属项目
     */
    project: {
      /**
       * 项目实际开始激活的时间
       */
      activeAt?: Date;
      /**
       * 项目实际关闭时间
       */
      closeAt?: Date;
      /**
       * 项目描述
       */
      description?: string;
      /**
       * 计划结束时间
       */
      endAt?: Date;
      /**
       * 行业
       */
      industry?: string;
      /**
       * 标签
       */
      labels?: string[];
      /**
       * 项目logo
       */
      logo?: string;
      /**
       * 协作者
       */
      members?: string[];
      /**
       * 项目名称
       */
      name?: string;
      /**
       * 所属命名空间
       */
      ns?: string;
      /**
       * 项目负责人 (userId)
       */
      owner?: string;
      /**
       * 项目管理人员 userid
       */
      pm?: string[];
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 项目阶段
       */
      stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
      /**
       * 计划开始时间
       */
      startAt?: Date;
      /**
       * 项目状态
       */
      state?: "OPEN" | "CLOSED";
      /**
       * 文档摘要，可以用于简介或者目录
       */
      summary?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 项目名称
       */
      name: string;
      /**
       * 项目负责人 (userId)
       */
      owner: string;
      /**
       * 项目状态
       */
      state: "OPEN" | "CLOSED";
    };
    state: "OPEN" | "CLOSED";
  };
}
export interface DeleteTicketRequest {
  projectId: string;
  ticketId: string;
}
export interface TakeTicketRequest {
  ticketId: string;
}
export interface TakeTicketResponse {
  /**
   * 工单
   */
  body: {
    /**
     * 额外奖励
     */
    bonus?: number;
    /**
     * 赏金
     */
    bounty?: number;
    /**
     * 关闭时间
     */
    closeAt?: Date;
    /**
     * ticket 的内容
     */
    content?: string;
    /**
     * 第三方数据
     */
    data?: {
      [k: string]: any;
    };
    /**
     * 截止时间
     */
    deadline?: Date;
    labels?: string[];
    level?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 父级卡片
     */
    parent?: string;
    priority?: 0 | 1 | 2;
    /**
     * 发布时间
     */
    publishAt?: Date;
    /**
     * 发布人 (userId)
     */
    publishBy?: string | null;
    /**
     * 是否被发布
     */
    published?: boolean;
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 备注
     */
    remark?: string;
    /**
     * 是否 reopened 过
     */
    reopen?: boolean;
    reopenAt?: Date;
    /**
     * ticket risk
     */
    risk?: "NO_RISK" | "RISK_DELAY" | "RISK_URGENCY" | "RISK_RETENTION";
    shiftAt?: Date;
    /**
     * project 阶段
     */
    stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
    state?: "OPEN" | "CLOSED";
    /**
     * 领取时间
     */
    takeAt?: Date;
    /**
     * 领取人 (userId)
     */
    takeBy?: string | null;
    /**
     * ticket 的标题
     */
    title?: string;
    /**
     * ticket 的类别
     */
    type?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * ticket 的标题
     */
    title: string;
    /**
     * 当前工单对应的可操作流程
     */
    flows?: ({
      /**
       * 工作流描述
       */
      description?: string;
      /**
       * 工作流名称
       */
      name?: string;
      /**
       * 限制工作流允许操作的角色
       */
      roles?: string[];
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 工作流名称
       */
      name: string;
      fields?: ({
        /**
         * 表单字段描述
         */
        description?: string;
        /**
         * 是否是必须的字段
         */
        required?: boolean;
        /**
         * 表单字段key
         */
        key: string;
        /**
         * 表单字段名称
         */
        name: string;
        /**
         * 表单字段类型
         */
        type: string;
        /**
         * 字段的占位字符
         */
        placeholder?: string;
        /**
         * 表单字段的默认值
         */
        defaultValue?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      })[];
      /**
       * 来源泳道
       */
      from: {
        /**
         * 泳道automations
         */
        automations?: string[];
        /**
         * 泳道描述
         */
        description?: string;
        /**
         * 泳道名称
         */
        name?: string;
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 必须填写的字段
         */
        requires?: string[];
        /**
         * 限制将卡片拖动到该泳道的角色
         */
        roles?: string[];
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 泳道名称
         */
        name: string;
      };
      /**
       * 目标泳道
       */
      to: {
        /**
         * 泳道automations
         */
        automations?: string[];
        /**
         * 泳道描述
         */
        description?: string;
        /**
         * 泳道名称
         */
        name?: string;
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 必须填写的字段
         */
        requires?: string[];
        /**
         * 限制将卡片拖动到该泳道的角色
         */
        roles?: string[];
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 泳道名称
         */
        name: string;
      };
    })[];
    /**
     * 所属泳道
     */
    lane?: {
      /**
       * 泳道automations
       */
      automations?: string[];
      /**
       * 泳道描述
       */
      description?: string;
      /**
       * 泳道名称
       */
      name?: string;
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 必须填写的字段
       */
      requires?: string[];
      /**
       * 限制将卡片拖动到该泳道的角色
       */
      roles?: string[];
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 泳道名称
       */
      name: string;
    };
    /**
     * 所属里程碑
     */
    milestone?: {
      /**
       * 实际里程碑开始激活的时间
       */
      activeAt?: Date;
      /**
       * 实际里程碑关闭时间
       */
      closeAt?: Date;
      /**
       * 里程碑描述
       */
      description?: string;
      /**
       * 计划结束时间
       */
      endAt?: Date;
      /**
       * 里程碑名称
       */
      name?: string;
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 计划开始时间
       */
      startAt?: Date;
      /**
       * 状态
       */
      state?: "OPEN" | "CLOSED";
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 里程碑名称
       */
      name: string;
      /**
       * 关联的project
       */
      project: {
        /**
         * 项目实际开始激活的时间
         */
        activeAt?: Date;
        /**
         * 项目实际关闭时间
         */
        closeAt?: Date;
        /**
         * 项目描述
         */
        description?: string;
        /**
         * 计划结束时间
         */
        endAt?: Date;
        /**
         * 行业
         */
        industry?: string;
        /**
         * 标签
         */
        labels?: string[];
        /**
         * 项目logo
         */
        logo?: string;
        /**
         * 协作者
         */
        members?: string[];
        /**
         * 项目名称
         */
        name?: string;
        /**
         * 所属命名空间
         */
        ns?: string;
        /**
         * 项目负责人 (userId)
         */
        owner?: string;
        /**
         * 项目管理人员 userid
         */
        pm?: string[];
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 项目阶段
         */
        stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
        /**
         * 计划开始时间
         */
        startAt?: Date;
        /**
         * 项目状态
         */
        state?: "OPEN" | "CLOSED";
        /**
         * 文档摘要，可以用于简介或者目录
         */
        summary?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 项目名称
         */
        name: string;
        /**
         * 项目负责人 (userId)
         */
        owner: string;
        /**
         * 项目状态
         */
        state: "OPEN" | "CLOSED";
      };
      /**
       * 状态
       */
      state: "OPEN" | "CLOSED";
    };
    /**
     * 所属项目
     */
    project: {
      /**
       * 项目实际开始激活的时间
       */
      activeAt?: Date;
      /**
       * 项目实际关闭时间
       */
      closeAt?: Date;
      /**
       * 项目描述
       */
      description?: string;
      /**
       * 计划结束时间
       */
      endAt?: Date;
      /**
       * 行业
       */
      industry?: string;
      /**
       * 标签
       */
      labels?: string[];
      /**
       * 项目logo
       */
      logo?: string;
      /**
       * 协作者
       */
      members?: string[];
      /**
       * 项目名称
       */
      name?: string;
      /**
       * 所属命名空间
       */
      ns?: string;
      /**
       * 项目负责人 (userId)
       */
      owner?: string;
      /**
       * 项目管理人员 userid
       */
      pm?: string[];
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 项目阶段
       */
      stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
      /**
       * 计划开始时间
       */
      startAt?: Date;
      /**
       * 项目状态
       */
      state?: "OPEN" | "CLOSED";
      /**
       * 文档摘要，可以用于简介或者目录
       */
      summary?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 项目名称
       */
      name: string;
      /**
       * 项目负责人 (userId)
       */
      owner: string;
      /**
       * 项目状态
       */
      state: "OPEN" | "CLOSED";
    };
    state: "OPEN" | "CLOSED";
  };
}
export interface UntakeTicketRequest {
  ticketId: string;
}
export interface UntakeTicketResponse {
  /**
   * 工单
   */
  body: {
    /**
     * 额外奖励
     */
    bonus?: number;
    /**
     * 赏金
     */
    bounty?: number;
    /**
     * 关闭时间
     */
    closeAt?: Date;
    /**
     * ticket 的内容
     */
    content?: string;
    /**
     * 第三方数据
     */
    data?: {
      [k: string]: any;
    };
    /**
     * 截止时间
     */
    deadline?: Date;
    labels?: string[];
    level?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 父级卡片
     */
    parent?: string;
    priority?: 0 | 1 | 2;
    /**
     * 发布时间
     */
    publishAt?: Date;
    /**
     * 发布人 (userId)
     */
    publishBy?: string | null;
    /**
     * 是否被发布
     */
    published?: boolean;
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 备注
     */
    remark?: string;
    /**
     * 是否 reopened 过
     */
    reopen?: boolean;
    reopenAt?: Date;
    /**
     * ticket risk
     */
    risk?: "NO_RISK" | "RISK_DELAY" | "RISK_URGENCY" | "RISK_RETENTION";
    shiftAt?: Date;
    /**
     * project 阶段
     */
    stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
    state?: "OPEN" | "CLOSED";
    /**
     * 领取时间
     */
    takeAt?: Date;
    /**
     * 领取人 (userId)
     */
    takeBy?: string | null;
    /**
     * ticket 的标题
     */
    title?: string;
    /**
     * ticket 的类别
     */
    type?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * ticket 的标题
     */
    title: string;
    /**
     * 当前工单对应的可操作流程
     */
    flows?: ({
      /**
       * 工作流描述
       */
      description?: string;
      /**
       * 工作流名称
       */
      name?: string;
      /**
       * 限制工作流允许操作的角色
       */
      roles?: string[];
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 工作流名称
       */
      name: string;
      fields?: ({
        /**
         * 表单字段描述
         */
        description?: string;
        /**
         * 是否是必须的字段
         */
        required?: boolean;
        /**
         * 表单字段key
         */
        key: string;
        /**
         * 表单字段名称
         */
        name: string;
        /**
         * 表单字段类型
         */
        type: string;
        /**
         * 字段的占位字符
         */
        placeholder?: string;
        /**
         * 表单字段的默认值
         */
        defaultValue?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      })[];
      /**
       * 来源泳道
       */
      from: {
        /**
         * 泳道automations
         */
        automations?: string[];
        /**
         * 泳道描述
         */
        description?: string;
        /**
         * 泳道名称
         */
        name?: string;
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 必须填写的字段
         */
        requires?: string[];
        /**
         * 限制将卡片拖动到该泳道的角色
         */
        roles?: string[];
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 泳道名称
         */
        name: string;
      };
      /**
       * 目标泳道
       */
      to: {
        /**
         * 泳道automations
         */
        automations?: string[];
        /**
         * 泳道描述
         */
        description?: string;
        /**
         * 泳道名称
         */
        name?: string;
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 必须填写的字段
         */
        requires?: string[];
        /**
         * 限制将卡片拖动到该泳道的角色
         */
        roles?: string[];
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 泳道名称
         */
        name: string;
      };
    })[];
    /**
     * 所属泳道
     */
    lane?: {
      /**
       * 泳道automations
       */
      automations?: string[];
      /**
       * 泳道描述
       */
      description?: string;
      /**
       * 泳道名称
       */
      name?: string;
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 必须填写的字段
       */
      requires?: string[];
      /**
       * 限制将卡片拖动到该泳道的角色
       */
      roles?: string[];
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 泳道名称
       */
      name: string;
    };
    /**
     * 所属里程碑
     */
    milestone?: {
      /**
       * 实际里程碑开始激活的时间
       */
      activeAt?: Date;
      /**
       * 实际里程碑关闭时间
       */
      closeAt?: Date;
      /**
       * 里程碑描述
       */
      description?: string;
      /**
       * 计划结束时间
       */
      endAt?: Date;
      /**
       * 里程碑名称
       */
      name?: string;
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 计划开始时间
       */
      startAt?: Date;
      /**
       * 状态
       */
      state?: "OPEN" | "CLOSED";
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 里程碑名称
       */
      name: string;
      /**
       * 关联的project
       */
      project: {
        /**
         * 项目实际开始激活的时间
         */
        activeAt?: Date;
        /**
         * 项目实际关闭时间
         */
        closeAt?: Date;
        /**
         * 项目描述
         */
        description?: string;
        /**
         * 计划结束时间
         */
        endAt?: Date;
        /**
         * 行业
         */
        industry?: string;
        /**
         * 标签
         */
        labels?: string[];
        /**
         * 项目logo
         */
        logo?: string;
        /**
         * 协作者
         */
        members?: string[];
        /**
         * 项目名称
         */
        name?: string;
        /**
         * 所属命名空间
         */
        ns?: string;
        /**
         * 项目负责人 (userId)
         */
        owner?: string;
        /**
         * 项目管理人员 userid
         */
        pm?: string[];
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 项目阶段
         */
        stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
        /**
         * 计划开始时间
         */
        startAt?: Date;
        /**
         * 项目状态
         */
        state?: "OPEN" | "CLOSED";
        /**
         * 文档摘要，可以用于简介或者目录
         */
        summary?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 项目名称
         */
        name: string;
        /**
         * 项目负责人 (userId)
         */
        owner: string;
        /**
         * 项目状态
         */
        state: "OPEN" | "CLOSED";
      };
      /**
       * 状态
       */
      state: "OPEN" | "CLOSED";
    };
    /**
     * 所属项目
     */
    project: {
      /**
       * 项目实际开始激活的时间
       */
      activeAt?: Date;
      /**
       * 项目实际关闭时间
       */
      closeAt?: Date;
      /**
       * 项目描述
       */
      description?: string;
      /**
       * 计划结束时间
       */
      endAt?: Date;
      /**
       * 行业
       */
      industry?: string;
      /**
       * 标签
       */
      labels?: string[];
      /**
       * 项目logo
       */
      logo?: string;
      /**
       * 协作者
       */
      members?: string[];
      /**
       * 项目名称
       */
      name?: string;
      /**
       * 所属命名空间
       */
      ns?: string;
      /**
       * 项目负责人 (userId)
       */
      owner?: string;
      /**
       * 项目管理人员 userid
       */
      pm?: string[];
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 项目阶段
       */
      stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
      /**
       * 计划开始时间
       */
      startAt?: Date;
      /**
       * 项目状态
       */
      state?: "OPEN" | "CLOSED";
      /**
       * 文档摘要，可以用于简介或者目录
       */
      summary?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 项目名称
       */
      name: string;
      /**
       * 项目负责人 (userId)
       */
      owner: string;
      /**
       * 项目状态
       */
      state: "OPEN" | "CLOSED";
    };
    state: "OPEN" | "CLOSED";
  };
}
export interface CloseTicketRequest {
  ticketId: string;
}
export interface CloseTicketResponse {
  /**
   * 工单
   */
  body: {
    /**
     * 额外奖励
     */
    bonus?: number;
    /**
     * 赏金
     */
    bounty?: number;
    /**
     * 关闭时间
     */
    closeAt?: Date;
    /**
     * ticket 的内容
     */
    content?: string;
    /**
     * 第三方数据
     */
    data?: {
      [k: string]: any;
    };
    /**
     * 截止时间
     */
    deadline?: Date;
    labels?: string[];
    level?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 父级卡片
     */
    parent?: string;
    priority?: 0 | 1 | 2;
    /**
     * 发布时间
     */
    publishAt?: Date;
    /**
     * 发布人 (userId)
     */
    publishBy?: string | null;
    /**
     * 是否被发布
     */
    published?: boolean;
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 备注
     */
    remark?: string;
    /**
     * 是否 reopened 过
     */
    reopen?: boolean;
    reopenAt?: Date;
    /**
     * ticket risk
     */
    risk?: "NO_RISK" | "RISK_DELAY" | "RISK_URGENCY" | "RISK_RETENTION";
    shiftAt?: Date;
    /**
     * project 阶段
     */
    stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
    state?: "OPEN" | "CLOSED";
    /**
     * 领取时间
     */
    takeAt?: Date;
    /**
     * 领取人 (userId)
     */
    takeBy?: string | null;
    /**
     * ticket 的标题
     */
    title?: string;
    /**
     * ticket 的类别
     */
    type?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * ticket 的标题
     */
    title: string;
    /**
     * 当前工单对应的可操作流程
     */
    flows?: ({
      /**
       * 工作流描述
       */
      description?: string;
      /**
       * 工作流名称
       */
      name?: string;
      /**
       * 限制工作流允许操作的角色
       */
      roles?: string[];
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 工作流名称
       */
      name: string;
      fields?: ({
        /**
         * 表单字段描述
         */
        description?: string;
        /**
         * 是否是必须的字段
         */
        required?: boolean;
        /**
         * 表单字段key
         */
        key: string;
        /**
         * 表单字段名称
         */
        name: string;
        /**
         * 表单字段类型
         */
        type: string;
        /**
         * 字段的占位字符
         */
        placeholder?: string;
        /**
         * 表单字段的默认值
         */
        defaultValue?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      })[];
      /**
       * 来源泳道
       */
      from: {
        /**
         * 泳道automations
         */
        automations?: string[];
        /**
         * 泳道描述
         */
        description?: string;
        /**
         * 泳道名称
         */
        name?: string;
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 必须填写的字段
         */
        requires?: string[];
        /**
         * 限制将卡片拖动到该泳道的角色
         */
        roles?: string[];
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 泳道名称
         */
        name: string;
      };
      /**
       * 目标泳道
       */
      to: {
        /**
         * 泳道automations
         */
        automations?: string[];
        /**
         * 泳道描述
         */
        description?: string;
        /**
         * 泳道名称
         */
        name?: string;
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 必须填写的字段
         */
        requires?: string[];
        /**
         * 限制将卡片拖动到该泳道的角色
         */
        roles?: string[];
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 泳道名称
         */
        name: string;
      };
    })[];
    /**
     * 所属泳道
     */
    lane?: {
      /**
       * 泳道automations
       */
      automations?: string[];
      /**
       * 泳道描述
       */
      description?: string;
      /**
       * 泳道名称
       */
      name?: string;
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 必须填写的字段
       */
      requires?: string[];
      /**
       * 限制将卡片拖动到该泳道的角色
       */
      roles?: string[];
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 泳道名称
       */
      name: string;
    };
    /**
     * 所属里程碑
     */
    milestone?: {
      /**
       * 实际里程碑开始激活的时间
       */
      activeAt?: Date;
      /**
       * 实际里程碑关闭时间
       */
      closeAt?: Date;
      /**
       * 里程碑描述
       */
      description?: string;
      /**
       * 计划结束时间
       */
      endAt?: Date;
      /**
       * 里程碑名称
       */
      name?: string;
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 计划开始时间
       */
      startAt?: Date;
      /**
       * 状态
       */
      state?: "OPEN" | "CLOSED";
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 里程碑名称
       */
      name: string;
      /**
       * 关联的project
       */
      project: {
        /**
         * 项目实际开始激活的时间
         */
        activeAt?: Date;
        /**
         * 项目实际关闭时间
         */
        closeAt?: Date;
        /**
         * 项目描述
         */
        description?: string;
        /**
         * 计划结束时间
         */
        endAt?: Date;
        /**
         * 行业
         */
        industry?: string;
        /**
         * 标签
         */
        labels?: string[];
        /**
         * 项目logo
         */
        logo?: string;
        /**
         * 协作者
         */
        members?: string[];
        /**
         * 项目名称
         */
        name?: string;
        /**
         * 所属命名空间
         */
        ns?: string;
        /**
         * 项目负责人 (userId)
         */
        owner?: string;
        /**
         * 项目管理人员 userid
         */
        pm?: string[];
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 项目阶段
         */
        stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
        /**
         * 计划开始时间
         */
        startAt?: Date;
        /**
         * 项目状态
         */
        state?: "OPEN" | "CLOSED";
        /**
         * 文档摘要，可以用于简介或者目录
         */
        summary?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 项目名称
         */
        name: string;
        /**
         * 项目负责人 (userId)
         */
        owner: string;
        /**
         * 项目状态
         */
        state: "OPEN" | "CLOSED";
      };
      /**
       * 状态
       */
      state: "OPEN" | "CLOSED";
    };
    /**
     * 所属项目
     */
    project: {
      /**
       * 项目实际开始激活的时间
       */
      activeAt?: Date;
      /**
       * 项目实际关闭时间
       */
      closeAt?: Date;
      /**
       * 项目描述
       */
      description?: string;
      /**
       * 计划结束时间
       */
      endAt?: Date;
      /**
       * 行业
       */
      industry?: string;
      /**
       * 标签
       */
      labels?: string[];
      /**
       * 项目logo
       */
      logo?: string;
      /**
       * 协作者
       */
      members?: string[];
      /**
       * 项目名称
       */
      name?: string;
      /**
       * 所属命名空间
       */
      ns?: string;
      /**
       * 项目负责人 (userId)
       */
      owner?: string;
      /**
       * 项目管理人员 userid
       */
      pm?: string[];
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 项目阶段
       */
      stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
      /**
       * 计划开始时间
       */
      startAt?: Date;
      /**
       * 项目状态
       */
      state?: "OPEN" | "CLOSED";
      /**
       * 文档摘要，可以用于简介或者目录
       */
      summary?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 项目名称
       */
      name: string;
      /**
       * 项目负责人 (userId)
       */
      owner: string;
      /**
       * 项目状态
       */
      state: "OPEN" | "CLOSED";
    };
    state: "OPEN" | "CLOSED";
  };
}
export interface ReopenTicketRequest {
  ticketId: string;
}
export interface ReopenTicketResponse {
  /**
   * 工单
   */
  body: {
    /**
     * 额外奖励
     */
    bonus?: number;
    /**
     * 赏金
     */
    bounty?: number;
    /**
     * 关闭时间
     */
    closeAt?: Date;
    /**
     * ticket 的内容
     */
    content?: string;
    /**
     * 第三方数据
     */
    data?: {
      [k: string]: any;
    };
    /**
     * 截止时间
     */
    deadline?: Date;
    labels?: string[];
    level?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 父级卡片
     */
    parent?: string;
    priority?: 0 | 1 | 2;
    /**
     * 发布时间
     */
    publishAt?: Date;
    /**
     * 发布人 (userId)
     */
    publishBy?: string | null;
    /**
     * 是否被发布
     */
    published?: boolean;
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 备注
     */
    remark?: string;
    /**
     * 是否 reopened 过
     */
    reopen?: boolean;
    reopenAt?: Date;
    /**
     * ticket risk
     */
    risk?: "NO_RISK" | "RISK_DELAY" | "RISK_URGENCY" | "RISK_RETENTION";
    shiftAt?: Date;
    /**
     * project 阶段
     */
    stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
    state?: "OPEN" | "CLOSED";
    /**
     * 领取时间
     */
    takeAt?: Date;
    /**
     * 领取人 (userId)
     */
    takeBy?: string | null;
    /**
     * ticket 的标题
     */
    title?: string;
    /**
     * ticket 的类别
     */
    type?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * ticket 的标题
     */
    title: string;
    /**
     * 当前工单对应的可操作流程
     */
    flows?: ({
      /**
       * 工作流描述
       */
      description?: string;
      /**
       * 工作流名称
       */
      name?: string;
      /**
       * 限制工作流允许操作的角色
       */
      roles?: string[];
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 工作流名称
       */
      name: string;
      fields?: ({
        /**
         * 表单字段描述
         */
        description?: string;
        /**
         * 是否是必须的字段
         */
        required?: boolean;
        /**
         * 表单字段key
         */
        key: string;
        /**
         * 表单字段名称
         */
        name: string;
        /**
         * 表单字段类型
         */
        type: string;
        /**
         * 字段的占位字符
         */
        placeholder?: string;
        /**
         * 表单字段的默认值
         */
        defaultValue?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      })[];
      /**
       * 来源泳道
       */
      from: {
        /**
         * 泳道automations
         */
        automations?: string[];
        /**
         * 泳道描述
         */
        description?: string;
        /**
         * 泳道名称
         */
        name?: string;
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 必须填写的字段
         */
        requires?: string[];
        /**
         * 限制将卡片拖动到该泳道的角色
         */
        roles?: string[];
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 泳道名称
         */
        name: string;
      };
      /**
       * 目标泳道
       */
      to: {
        /**
         * 泳道automations
         */
        automations?: string[];
        /**
         * 泳道描述
         */
        description?: string;
        /**
         * 泳道名称
         */
        name?: string;
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 必须填写的字段
         */
        requires?: string[];
        /**
         * 限制将卡片拖动到该泳道的角色
         */
        roles?: string[];
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 泳道名称
         */
        name: string;
      };
    })[];
    /**
     * 所属泳道
     */
    lane?: {
      /**
       * 泳道automations
       */
      automations?: string[];
      /**
       * 泳道描述
       */
      description?: string;
      /**
       * 泳道名称
       */
      name?: string;
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 必须填写的字段
       */
      requires?: string[];
      /**
       * 限制将卡片拖动到该泳道的角色
       */
      roles?: string[];
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 泳道名称
       */
      name: string;
    };
    /**
     * 所属里程碑
     */
    milestone?: {
      /**
       * 实际里程碑开始激活的时间
       */
      activeAt?: Date;
      /**
       * 实际里程碑关闭时间
       */
      closeAt?: Date;
      /**
       * 里程碑描述
       */
      description?: string;
      /**
       * 计划结束时间
       */
      endAt?: Date;
      /**
       * 里程碑名称
       */
      name?: string;
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 计划开始时间
       */
      startAt?: Date;
      /**
       * 状态
       */
      state?: "OPEN" | "CLOSED";
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 里程碑名称
       */
      name: string;
      /**
       * 关联的project
       */
      project: {
        /**
         * 项目实际开始激活的时间
         */
        activeAt?: Date;
        /**
         * 项目实际关闭时间
         */
        closeAt?: Date;
        /**
         * 项目描述
         */
        description?: string;
        /**
         * 计划结束时间
         */
        endAt?: Date;
        /**
         * 行业
         */
        industry?: string;
        /**
         * 标签
         */
        labels?: string[];
        /**
         * 项目logo
         */
        logo?: string;
        /**
         * 协作者
         */
        members?: string[];
        /**
         * 项目名称
         */
        name?: string;
        /**
         * 所属命名空间
         */
        ns?: string;
        /**
         * 项目负责人 (userId)
         */
        owner?: string;
        /**
         * 项目管理人员 userid
         */
        pm?: string[];
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 项目阶段
         */
        stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
        /**
         * 计划开始时间
         */
        startAt?: Date;
        /**
         * 项目状态
         */
        state?: "OPEN" | "CLOSED";
        /**
         * 文档摘要，可以用于简介或者目录
         */
        summary?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 项目名称
         */
        name: string;
        /**
         * 项目负责人 (userId)
         */
        owner: string;
        /**
         * 项目状态
         */
        state: "OPEN" | "CLOSED";
      };
      /**
       * 状态
       */
      state: "OPEN" | "CLOSED";
    };
    /**
     * 所属项目
     */
    project: {
      /**
       * 项目实际开始激活的时间
       */
      activeAt?: Date;
      /**
       * 项目实际关闭时间
       */
      closeAt?: Date;
      /**
       * 项目描述
       */
      description?: string;
      /**
       * 计划结束时间
       */
      endAt?: Date;
      /**
       * 行业
       */
      industry?: string;
      /**
       * 标签
       */
      labels?: string[];
      /**
       * 项目logo
       */
      logo?: string;
      /**
       * 协作者
       */
      members?: string[];
      /**
       * 项目名称
       */
      name?: string;
      /**
       * 所属命名空间
       */
      ns?: string;
      /**
       * 项目负责人 (userId)
       */
      owner?: string;
      /**
       * 项目管理人员 userid
       */
      pm?: string[];
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 项目阶段
       */
      stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
      /**
       * 计划开始时间
       */
      startAt?: Date;
      /**
       * 项目状态
       */
      state?: "OPEN" | "CLOSED";
      /**
       * 文档摘要，可以用于简介或者目录
       */
      summary?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 项目名称
       */
      name: string;
      /**
       * 项目负责人 (userId)
       */
      owner: string;
      /**
       * 项目状态
       */
      state: "OPEN" | "CLOSED";
    };
    state: "OPEN" | "CLOSED";
  };
}
export interface ListActionsRequest {
  query?: {
    board?: string;
    createBy?: string[];
    _limit?: number;
    _offset?: number;
    project?: string[];
    _select?: string[];
    _sort?: string;
    ticket?: string;
  };
}
export interface ListActionsResponse {
  body: ({
    /**
     * 任务备注
     */
    remark?: string;
    /**
     * 任务名称
     */
    name?: string;
    /**
     * 上传的数据
     */
    payload?: {
      [k: string]: any;
    };
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 任务名称
     */
    name: string;
    /**
     * 对应工作流
     */
    flow: {
      /**
       * 工作流描述
       */
      description?: string;
      /**
       * 工作流名称
       */
      name?: string;
      /**
       * 限制工作流允许操作的角色
       */
      roles?: string[];
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 工作流名称
       */
      name: string;
      fields?: ({
        /**
         * 表单字段描述
         */
        description?: string;
        /**
         * 是否是必须的字段
         */
        required?: boolean;
        /**
         * 表单字段key
         */
        key: string;
        /**
         * 表单字段名称
         */
        name: string;
        /**
         * 表单字段类型
         */
        type: string;
        /**
         * 字段的占位字符
         */
        placeholder?: string;
        /**
         * 表单字段的默认值
         */
        defaultValue?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      })[];
      /**
       * 来源泳道
       */
      from: {
        /**
         * 泳道automations
         */
        automations?: string[];
        /**
         * 泳道描述
         */
        description?: string;
        /**
         * 泳道名称
         */
        name?: string;
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 必须填写的字段
         */
        requires?: string[];
        /**
         * 限制将卡片拖动到该泳道的角色
         */
        roles?: string[];
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 泳道名称
         */
        name: string;
      };
      /**
       * 目标泳道
       */
      to: {
        /**
         * 泳道automations
         */
        automations?: string[];
        /**
         * 泳道描述
         */
        description?: string;
        /**
         * 泳道名称
         */
        name?: string;
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 必须填写的字段
         */
        requires?: string[];
        /**
         * 限制将卡片拖动到该泳道的角色
         */
        roles?: string[];
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 泳道名称
         */
        name: string;
      };
    };
    /**
     * 对应工单
     */
    ticket: {
      /**
       * 额外奖励
       */
      bonus?: number;
      /**
       * 赏金
       */
      bounty?: number;
      /**
       * 关闭时间
       */
      closeAt?: Date;
      /**
       * ticket 的内容
       */
      content?: string;
      /**
       * 第三方数据
       */
      data?: {
        [k: string]: any;
      };
      /**
       * 截止时间
       */
      deadline?: Date;
      labels?: string[];
      level?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
      /**
       * 所属命名空间
       */
      ns?: string;
      /**
       * 父级卡片
       */
      parent?: string;
      priority?: 0 | 1 | 2;
      /**
       * 发布时间
       */
      publishAt?: Date;
      /**
       * 发布人 (userId)
       */
      publishBy?: string | null;
      /**
       * 是否被发布
       */
      published?: boolean;
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 备注
       */
      remark?: string;
      /**
       * 是否 reopened 过
       */
      reopen?: boolean;
      reopenAt?: Date;
      /**
       * ticket risk
       */
      risk?: "NO_RISK" | "RISK_DELAY" | "RISK_URGENCY" | "RISK_RETENTION";
      shiftAt?: Date;
      /**
       * project 阶段
       */
      stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
      state?: "OPEN" | "CLOSED";
      /**
       * 领取时间
       */
      takeAt?: Date;
      /**
       * 领取人 (userId)
       */
      takeBy?: string | null;
      /**
       * ticket 的标题
       */
      title?: string;
      /**
       * ticket 的类别
       */
      type?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * ticket 的标题
       */
      title: string;
      /**
       * 当前工单对应的可操作流程
       */
      flows?: ({
        /**
         * 工作流描述
         */
        description?: string;
        /**
         * 工作流名称
         */
        name?: string;
        /**
         * 限制工作流允许操作的角色
         */
        roles?: string[];
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 工作流名称
         */
        name: string;
        fields?: ({
          /**
           * 表单字段描述
           */
          description?: string;
          /**
           * 是否是必须的字段
           */
          required?: boolean;
          /**
           * 表单字段key
           */
          key: string;
          /**
           * 表单字段名称
           */
          name: string;
          /**
           * 表单字段类型
           */
          type: string;
          /**
           * 字段的占位字符
           */
          placeholder?: string;
          /**
           * 表单字段的默认值
           */
          defaultValue?: string;
        } & {
          id: string;
          updateAt?: Date;
          updateBy?: string;
          createAt?: Date;
          createBy?: string;
        })[];
        /**
         * 来源泳道
         */
        from: {
          /**
           * 泳道automations
           */
          automations?: string[];
          /**
           * 泳道描述
           */
          description?: string;
          /**
           * 泳道名称
           */
          name?: string;
          refs?: {
            /**
             * 资源在第三方的 origin id
             */
            oid: string;
            /**
             * 来源
             */
            source: string;
            /**
             * 名称
             */
            name?: string;
            /**
             * 描述
             */
            description?: string;
            /**
             * 类型
             */
            type?: string;
            /**
             * 唯一地址
             */
            uri?: string;
          }[];
          /**
           * 必须填写的字段
           */
          requires?: string[];
          /**
           * 限制将卡片拖动到该泳道的角色
           */
          roles?: string[];
        } & {
          id: string;
          updateAt?: Date;
          updateBy?: string;
          createAt?: Date;
          createBy?: string;
        } & {
          /**
           * 泳道名称
           */
          name: string;
        };
        /**
         * 目标泳道
         */
        to: {
          /**
           * 泳道automations
           */
          automations?: string[];
          /**
           * 泳道描述
           */
          description?: string;
          /**
           * 泳道名称
           */
          name?: string;
          refs?: {
            /**
             * 资源在第三方的 origin id
             */
            oid: string;
            /**
             * 来源
             */
            source: string;
            /**
             * 名称
             */
            name?: string;
            /**
             * 描述
             */
            description?: string;
            /**
             * 类型
             */
            type?: string;
            /**
             * 唯一地址
             */
            uri?: string;
          }[];
          /**
           * 必须填写的字段
           */
          requires?: string[];
          /**
           * 限制将卡片拖动到该泳道的角色
           */
          roles?: string[];
        } & {
          id: string;
          updateAt?: Date;
          updateBy?: string;
          createAt?: Date;
          createBy?: string;
        } & {
          /**
           * 泳道名称
           */
          name: string;
        };
      })[];
      /**
       * 所属泳道
       */
      lane?: {
        /**
         * 泳道automations
         */
        automations?: string[];
        /**
         * 泳道描述
         */
        description?: string;
        /**
         * 泳道名称
         */
        name?: string;
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 必须填写的字段
         */
        requires?: string[];
        /**
         * 限制将卡片拖动到该泳道的角色
         */
        roles?: string[];
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 泳道名称
         */
        name: string;
      };
      /**
       * 所属里程碑
       */
      milestone?: {
        /**
         * 实际里程碑开始激活的时间
         */
        activeAt?: Date;
        /**
         * 实际里程碑关闭时间
         */
        closeAt?: Date;
        /**
         * 里程碑描述
         */
        description?: string;
        /**
         * 计划结束时间
         */
        endAt?: Date;
        /**
         * 里程碑名称
         */
        name?: string;
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 计划开始时间
         */
        startAt?: Date;
        /**
         * 状态
         */
        state?: "OPEN" | "CLOSED";
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 里程碑名称
         */
        name: string;
        /**
         * 关联的project
         */
        project: {
          /**
           * 项目实际开始激活的时间
           */
          activeAt?: Date;
          /**
           * 项目实际关闭时间
           */
          closeAt?: Date;
          /**
           * 项目描述
           */
          description?: string;
          /**
           * 计划结束时间
           */
          endAt?: Date;
          /**
           * 行业
           */
          industry?: string;
          /**
           * 标签
           */
          labels?: string[];
          /**
           * 项目logo
           */
          logo?: string;
          /**
           * 协作者
           */
          members?: string[];
          /**
           * 项目名称
           */
          name?: string;
          /**
           * 所属命名空间
           */
          ns?: string;
          /**
           * 项目负责人 (userId)
           */
          owner?: string;
          /**
           * 项目管理人员 userid
           */
          pm?: string[];
          refs?: {
            /**
             * 资源在第三方的 origin id
             */
            oid: string;
            /**
             * 来源
             */
            source: string;
            /**
             * 名称
             */
            name?: string;
            /**
             * 描述
             */
            description?: string;
            /**
             * 类型
             */
            type?: string;
            /**
             * 唯一地址
             */
            uri?: string;
          }[];
          /**
           * 项目阶段
           */
          stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
          /**
           * 计划开始时间
           */
          startAt?: Date;
          /**
           * 项目状态
           */
          state?: "OPEN" | "CLOSED";
          /**
           * 文档摘要，可以用于简介或者目录
           */
          summary?: string;
        } & {
          id: string;
          updateAt?: Date;
          updateBy?: string;
          createAt?: Date;
          createBy?: string;
        } & {
          /**
           * 项目名称
           */
          name: string;
          /**
           * 项目负责人 (userId)
           */
          owner: string;
          /**
           * 项目状态
           */
          state: "OPEN" | "CLOSED";
        };
        /**
         * 状态
         */
        state: "OPEN" | "CLOSED";
      };
      /**
       * 所属项目
       */
      project: {
        /**
         * 项目实际开始激活的时间
         */
        activeAt?: Date;
        /**
         * 项目实际关闭时间
         */
        closeAt?: Date;
        /**
         * 项目描述
         */
        description?: string;
        /**
         * 计划结束时间
         */
        endAt?: Date;
        /**
         * 行业
         */
        industry?: string;
        /**
         * 标签
         */
        labels?: string[];
        /**
         * 项目logo
         */
        logo?: string;
        /**
         * 协作者
         */
        members?: string[];
        /**
         * 项目名称
         */
        name?: string;
        /**
         * 所属命名空间
         */
        ns?: string;
        /**
         * 项目负责人 (userId)
         */
        owner?: string;
        /**
         * 项目管理人员 userid
         */
        pm?: string[];
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 项目阶段
         */
        stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
        /**
         * 计划开始时间
         */
        startAt?: Date;
        /**
         * 项目状态
         */
        state?: "OPEN" | "CLOSED";
        /**
         * 文档摘要，可以用于简介或者目录
         */
        summary?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 项目名称
         */
        name: string;
        /**
         * 项目负责人 (userId)
         */
        owner: string;
        /**
         * 项目状态
         */
        state: "OPEN" | "CLOSED";
      };
      state: "OPEN" | "CLOSED";
    };
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface CreateActionRequest {
  /**
   * 任务创建文档
   */
  body: {
    /**
     * 任务备注
     */
    remark?: string;
    /**
     * 任务名称
     */
    name?: string;
    /**
     * 上传的数据
     */
    payload?: {
      [k: string]: any;
    };
  } & {
    /**
     * 任务名称
     */
    name: string;
    /**
     * 对应看板 ID
     */
    board: string;
    /**
     * 对应工作流 ID
     */
    flow: string;
    /**
     * 对应工单 ID
     */
    ticket: string;
  };
}
export interface CreateActionResponse {
  /**
   * 任务载体
   */
  body: {
    /**
     * 任务备注
     */
    remark?: string;
    /**
     * 任务名称
     */
    name?: string;
    /**
     * 上传的数据
     */
    payload?: {
      [k: string]: any;
    };
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 任务名称
     */
    name: string;
    /**
     * 对应工作流
     */
    flow: {
      /**
       * 工作流描述
       */
      description?: string;
      /**
       * 工作流名称
       */
      name?: string;
      /**
       * 限制工作流允许操作的角色
       */
      roles?: string[];
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 工作流名称
       */
      name: string;
      fields?: ({
        /**
         * 表单字段描述
         */
        description?: string;
        /**
         * 是否是必须的字段
         */
        required?: boolean;
        /**
         * 表单字段key
         */
        key: string;
        /**
         * 表单字段名称
         */
        name: string;
        /**
         * 表单字段类型
         */
        type: string;
        /**
         * 字段的占位字符
         */
        placeholder?: string;
        /**
         * 表单字段的默认值
         */
        defaultValue?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      })[];
      /**
       * 来源泳道
       */
      from: {
        /**
         * 泳道automations
         */
        automations?: string[];
        /**
         * 泳道描述
         */
        description?: string;
        /**
         * 泳道名称
         */
        name?: string;
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 必须填写的字段
         */
        requires?: string[];
        /**
         * 限制将卡片拖动到该泳道的角色
         */
        roles?: string[];
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 泳道名称
         */
        name: string;
      };
      /**
       * 目标泳道
       */
      to: {
        /**
         * 泳道automations
         */
        automations?: string[];
        /**
         * 泳道描述
         */
        description?: string;
        /**
         * 泳道名称
         */
        name?: string;
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 必须填写的字段
         */
        requires?: string[];
        /**
         * 限制将卡片拖动到该泳道的角色
         */
        roles?: string[];
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 泳道名称
         */
        name: string;
      };
    };
    /**
     * 对应工单
     */
    ticket: {
      /**
       * 额外奖励
       */
      bonus?: number;
      /**
       * 赏金
       */
      bounty?: number;
      /**
       * 关闭时间
       */
      closeAt?: Date;
      /**
       * ticket 的内容
       */
      content?: string;
      /**
       * 第三方数据
       */
      data?: {
        [k: string]: any;
      };
      /**
       * 截止时间
       */
      deadline?: Date;
      labels?: string[];
      level?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
      /**
       * 所属命名空间
       */
      ns?: string;
      /**
       * 父级卡片
       */
      parent?: string;
      priority?: 0 | 1 | 2;
      /**
       * 发布时间
       */
      publishAt?: Date;
      /**
       * 发布人 (userId)
       */
      publishBy?: string | null;
      /**
       * 是否被发布
       */
      published?: boolean;
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 备注
       */
      remark?: string;
      /**
       * 是否 reopened 过
       */
      reopen?: boolean;
      reopenAt?: Date;
      /**
       * ticket risk
       */
      risk?: "NO_RISK" | "RISK_DELAY" | "RISK_URGENCY" | "RISK_RETENTION";
      shiftAt?: Date;
      /**
       * project 阶段
       */
      stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
      state?: "OPEN" | "CLOSED";
      /**
       * 领取时间
       */
      takeAt?: Date;
      /**
       * 领取人 (userId)
       */
      takeBy?: string | null;
      /**
       * ticket 的标题
       */
      title?: string;
      /**
       * ticket 的类别
       */
      type?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * ticket 的标题
       */
      title: string;
      /**
       * 当前工单对应的可操作流程
       */
      flows?: ({
        /**
         * 工作流描述
         */
        description?: string;
        /**
         * 工作流名称
         */
        name?: string;
        /**
         * 限制工作流允许操作的角色
         */
        roles?: string[];
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 工作流名称
         */
        name: string;
        fields?: ({
          /**
           * 表单字段描述
           */
          description?: string;
          /**
           * 是否是必须的字段
           */
          required?: boolean;
          /**
           * 表单字段key
           */
          key: string;
          /**
           * 表单字段名称
           */
          name: string;
          /**
           * 表单字段类型
           */
          type: string;
          /**
           * 字段的占位字符
           */
          placeholder?: string;
          /**
           * 表单字段的默认值
           */
          defaultValue?: string;
        } & {
          id: string;
          updateAt?: Date;
          updateBy?: string;
          createAt?: Date;
          createBy?: string;
        })[];
        /**
         * 来源泳道
         */
        from: {
          /**
           * 泳道automations
           */
          automations?: string[];
          /**
           * 泳道描述
           */
          description?: string;
          /**
           * 泳道名称
           */
          name?: string;
          refs?: {
            /**
             * 资源在第三方的 origin id
             */
            oid: string;
            /**
             * 来源
             */
            source: string;
            /**
             * 名称
             */
            name?: string;
            /**
             * 描述
             */
            description?: string;
            /**
             * 类型
             */
            type?: string;
            /**
             * 唯一地址
             */
            uri?: string;
          }[];
          /**
           * 必须填写的字段
           */
          requires?: string[];
          /**
           * 限制将卡片拖动到该泳道的角色
           */
          roles?: string[];
        } & {
          id: string;
          updateAt?: Date;
          updateBy?: string;
          createAt?: Date;
          createBy?: string;
        } & {
          /**
           * 泳道名称
           */
          name: string;
        };
        /**
         * 目标泳道
         */
        to: {
          /**
           * 泳道automations
           */
          automations?: string[];
          /**
           * 泳道描述
           */
          description?: string;
          /**
           * 泳道名称
           */
          name?: string;
          refs?: {
            /**
             * 资源在第三方的 origin id
             */
            oid: string;
            /**
             * 来源
             */
            source: string;
            /**
             * 名称
             */
            name?: string;
            /**
             * 描述
             */
            description?: string;
            /**
             * 类型
             */
            type?: string;
            /**
             * 唯一地址
             */
            uri?: string;
          }[];
          /**
           * 必须填写的字段
           */
          requires?: string[];
          /**
           * 限制将卡片拖动到该泳道的角色
           */
          roles?: string[];
        } & {
          id: string;
          updateAt?: Date;
          updateBy?: string;
          createAt?: Date;
          createBy?: string;
        } & {
          /**
           * 泳道名称
           */
          name: string;
        };
      })[];
      /**
       * 所属泳道
       */
      lane?: {
        /**
         * 泳道automations
         */
        automations?: string[];
        /**
         * 泳道描述
         */
        description?: string;
        /**
         * 泳道名称
         */
        name?: string;
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 必须填写的字段
         */
        requires?: string[];
        /**
         * 限制将卡片拖动到该泳道的角色
         */
        roles?: string[];
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 泳道名称
         */
        name: string;
      };
      /**
       * 所属里程碑
       */
      milestone?: {
        /**
         * 实际里程碑开始激活的时间
         */
        activeAt?: Date;
        /**
         * 实际里程碑关闭时间
         */
        closeAt?: Date;
        /**
         * 里程碑描述
         */
        description?: string;
        /**
         * 计划结束时间
         */
        endAt?: Date;
        /**
         * 里程碑名称
         */
        name?: string;
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 计划开始时间
         */
        startAt?: Date;
        /**
         * 状态
         */
        state?: "OPEN" | "CLOSED";
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 里程碑名称
         */
        name: string;
        /**
         * 关联的project
         */
        project: {
          /**
           * 项目实际开始激活的时间
           */
          activeAt?: Date;
          /**
           * 项目实际关闭时间
           */
          closeAt?: Date;
          /**
           * 项目描述
           */
          description?: string;
          /**
           * 计划结束时间
           */
          endAt?: Date;
          /**
           * 行业
           */
          industry?: string;
          /**
           * 标签
           */
          labels?: string[];
          /**
           * 项目logo
           */
          logo?: string;
          /**
           * 协作者
           */
          members?: string[];
          /**
           * 项目名称
           */
          name?: string;
          /**
           * 所属命名空间
           */
          ns?: string;
          /**
           * 项目负责人 (userId)
           */
          owner?: string;
          /**
           * 项目管理人员 userid
           */
          pm?: string[];
          refs?: {
            /**
             * 资源在第三方的 origin id
             */
            oid: string;
            /**
             * 来源
             */
            source: string;
            /**
             * 名称
             */
            name?: string;
            /**
             * 描述
             */
            description?: string;
            /**
             * 类型
             */
            type?: string;
            /**
             * 唯一地址
             */
            uri?: string;
          }[];
          /**
           * 项目阶段
           */
          stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
          /**
           * 计划开始时间
           */
          startAt?: Date;
          /**
           * 项目状态
           */
          state?: "OPEN" | "CLOSED";
          /**
           * 文档摘要，可以用于简介或者目录
           */
          summary?: string;
        } & {
          id: string;
          updateAt?: Date;
          updateBy?: string;
          createAt?: Date;
          createBy?: string;
        } & {
          /**
           * 项目名称
           */
          name: string;
          /**
           * 项目负责人 (userId)
           */
          owner: string;
          /**
           * 项目状态
           */
          state: "OPEN" | "CLOSED";
        };
        /**
         * 状态
         */
        state: "OPEN" | "CLOSED";
      };
      /**
       * 所属项目
       */
      project: {
        /**
         * 项目实际开始激活的时间
         */
        activeAt?: Date;
        /**
         * 项目实际关闭时间
         */
        closeAt?: Date;
        /**
         * 项目描述
         */
        description?: string;
        /**
         * 计划结束时间
         */
        endAt?: Date;
        /**
         * 行业
         */
        industry?: string;
        /**
         * 标签
         */
        labels?: string[];
        /**
         * 项目logo
         */
        logo?: string;
        /**
         * 协作者
         */
        members?: string[];
        /**
         * 项目名称
         */
        name?: string;
        /**
         * 所属命名空间
         */
        ns?: string;
        /**
         * 项目负责人 (userId)
         */
        owner?: string;
        /**
         * 项目管理人员 userid
         */
        pm?: string[];
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 项目阶段
         */
        stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
        /**
         * 计划开始时间
         */
        startAt?: Date;
        /**
         * 项目状态
         */
        state?: "OPEN" | "CLOSED";
        /**
         * 文档摘要，可以用于简介或者目录
         */
        summary?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 项目名称
         */
        name: string;
        /**
         * 项目负责人 (userId)
         */
        owner: string;
        /**
         * 项目状态
         */
        state: "OPEN" | "CLOSED";
      };
      state: "OPEN" | "CLOSED";
    };
  };
}
export interface ListMilestonesRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string[];
    project?: string[];
    state?: "OPEN" | "CLOSED";
    startAt_gt?: string;
    startAt_lt?: string;
  };
}
export interface ListMilestonesResponse {
  body: ({
    /**
     * 实际里程碑开始激活的时间
     */
    activeAt?: Date;
    /**
     * 实际里程碑关闭时间
     */
    closeAt?: Date;
    /**
     * 里程碑描述
     */
    description?: string;
    /**
     * 计划结束时间
     */
    endAt?: Date;
    /**
     * 里程碑名称
     */
    name?: string;
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 计划开始时间
     */
    startAt?: Date;
    /**
     * 状态
     */
    state?: "OPEN" | "CLOSED";
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 里程碑名称
     */
    name: string;
    /**
     * 关联的project
     */
    project: {
      /**
       * 项目实际开始激活的时间
       */
      activeAt?: Date;
      /**
       * 项目实际关闭时间
       */
      closeAt?: Date;
      /**
       * 项目描述
       */
      description?: string;
      /**
       * 计划结束时间
       */
      endAt?: Date;
      /**
       * 行业
       */
      industry?: string;
      /**
       * 标签
       */
      labels?: string[];
      /**
       * 项目logo
       */
      logo?: string;
      /**
       * 协作者
       */
      members?: string[];
      /**
       * 项目名称
       */
      name?: string;
      /**
       * 所属命名空间
       */
      ns?: string;
      /**
       * 项目负责人 (userId)
       */
      owner?: string;
      /**
       * 项目管理人员 userid
       */
      pm?: string[];
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 项目阶段
       */
      stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
      /**
       * 计划开始时间
       */
      startAt?: Date;
      /**
       * 项目状态
       */
      state?: "OPEN" | "CLOSED";
      /**
       * 文档摘要，可以用于简介或者目录
       */
      summary?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 项目名称
       */
      name: string;
      /**
       * 项目负责人 (userId)
       */
      owner: string;
      /**
       * 项目状态
       */
      state: "OPEN" | "CLOSED";
    };
    /**
     * 状态
     */
    state: "OPEN" | "CLOSED";
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface CreateMilestoneRequest {
  body: {
    /**
     * 实际里程碑开始激活的时间
     */
    activeAt?: Date;
    /**
     * 实际里程碑关闭时间
     */
    closeAt?: Date;
    /**
     * 里程碑描述
     */
    description?: string;
    /**
     * 计划结束时间
     */
    endAt?: Date;
    /**
     * 里程碑名称
     */
    name?: string;
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 计划开始时间
     */
    startAt?: Date;
    /**
     * 状态
     */
    state?: "OPEN" | "CLOSED";
  } & {
    /**
     * 里程碑名称
     */
    name: string;
    /**
     * 关联的project
     */
    project: string;
  };
}
export interface CreateMilestoneResponse {
  /**
   * 里程碑
   */
  body: {
    /**
     * 实际里程碑开始激活的时间
     */
    activeAt?: Date;
    /**
     * 实际里程碑关闭时间
     */
    closeAt?: Date;
    /**
     * 里程碑描述
     */
    description?: string;
    /**
     * 计划结束时间
     */
    endAt?: Date;
    /**
     * 里程碑名称
     */
    name?: string;
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 计划开始时间
     */
    startAt?: Date;
    /**
     * 状态
     */
    state?: "OPEN" | "CLOSED";
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 里程碑名称
     */
    name: string;
    /**
     * 关联的project
     */
    project: {
      /**
       * 项目实际开始激活的时间
       */
      activeAt?: Date;
      /**
       * 项目实际关闭时间
       */
      closeAt?: Date;
      /**
       * 项目描述
       */
      description?: string;
      /**
       * 计划结束时间
       */
      endAt?: Date;
      /**
       * 行业
       */
      industry?: string;
      /**
       * 标签
       */
      labels?: string[];
      /**
       * 项目logo
       */
      logo?: string;
      /**
       * 协作者
       */
      members?: string[];
      /**
       * 项目名称
       */
      name?: string;
      /**
       * 所属命名空间
       */
      ns?: string;
      /**
       * 项目负责人 (userId)
       */
      owner?: string;
      /**
       * 项目管理人员 userid
       */
      pm?: string[];
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 项目阶段
       */
      stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
      /**
       * 计划开始时间
       */
      startAt?: Date;
      /**
       * 项目状态
       */
      state?: "OPEN" | "CLOSED";
      /**
       * 文档摘要，可以用于简介或者目录
       */
      summary?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 项目名称
       */
      name: string;
      /**
       * 项目负责人 (userId)
       */
      owner: string;
      /**
       * 项目状态
       */
      state: "OPEN" | "CLOSED";
    };
    /**
     * 状态
     */
    state: "OPEN" | "CLOSED";
  };
}
export interface GetMilestoneRequest {
  milestoneId: string;
}
export interface GetMilestoneResponse {
  /**
   * 里程碑
   */
  body: {
    /**
     * 实际里程碑开始激活的时间
     */
    activeAt?: Date;
    /**
     * 实际里程碑关闭时间
     */
    closeAt?: Date;
    /**
     * 里程碑描述
     */
    description?: string;
    /**
     * 计划结束时间
     */
    endAt?: Date;
    /**
     * 里程碑名称
     */
    name?: string;
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 计划开始时间
     */
    startAt?: Date;
    /**
     * 状态
     */
    state?: "OPEN" | "CLOSED";
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 里程碑名称
     */
    name: string;
    /**
     * 关联的project
     */
    project: {
      /**
       * 项目实际开始激活的时间
       */
      activeAt?: Date;
      /**
       * 项目实际关闭时间
       */
      closeAt?: Date;
      /**
       * 项目描述
       */
      description?: string;
      /**
       * 计划结束时间
       */
      endAt?: Date;
      /**
       * 行业
       */
      industry?: string;
      /**
       * 标签
       */
      labels?: string[];
      /**
       * 项目logo
       */
      logo?: string;
      /**
       * 协作者
       */
      members?: string[];
      /**
       * 项目名称
       */
      name?: string;
      /**
       * 所属命名空间
       */
      ns?: string;
      /**
       * 项目负责人 (userId)
       */
      owner?: string;
      /**
       * 项目管理人员 userid
       */
      pm?: string[];
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 项目阶段
       */
      stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
      /**
       * 计划开始时间
       */
      startAt?: Date;
      /**
       * 项目状态
       */
      state?: "OPEN" | "CLOSED";
      /**
       * 文档摘要，可以用于简介或者目录
       */
      summary?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 项目名称
       */
      name: string;
      /**
       * 项目负责人 (userId)
       */
      owner: string;
      /**
       * 项目状态
       */
      state: "OPEN" | "CLOSED";
    };
    /**
     * 状态
     */
    state: "OPEN" | "CLOSED";
  };
}
export interface UpdateMilestoneRequest {
  milestoneId: string;
  /**
   * 里程碑 Doc
   */
  body: {
    /**
     * 实际里程碑开始激活的时间
     */
    activeAt?: Date;
    /**
     * 实际里程碑关闭时间
     */
    closeAt?: Date;
    /**
     * 里程碑描述
     */
    description?: string;
    /**
     * 计划结束时间
     */
    endAt?: Date;
    /**
     * 里程碑名称
     */
    name?: string;
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 计划开始时间
     */
    startAt?: Date;
    /**
     * 状态
     */
    state?: "OPEN" | "CLOSED";
  };
}
export interface UpdateMilestoneResponse {
  /**
   * 里程碑
   */
  body: {
    /**
     * 实际里程碑开始激活的时间
     */
    activeAt?: Date;
    /**
     * 实际里程碑关闭时间
     */
    closeAt?: Date;
    /**
     * 里程碑描述
     */
    description?: string;
    /**
     * 计划结束时间
     */
    endAt?: Date;
    /**
     * 里程碑名称
     */
    name?: string;
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 计划开始时间
     */
    startAt?: Date;
    /**
     * 状态
     */
    state?: "OPEN" | "CLOSED";
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 里程碑名称
     */
    name: string;
    /**
     * 关联的project
     */
    project: {
      /**
       * 项目实际开始激活的时间
       */
      activeAt?: Date;
      /**
       * 项目实际关闭时间
       */
      closeAt?: Date;
      /**
       * 项目描述
       */
      description?: string;
      /**
       * 计划结束时间
       */
      endAt?: Date;
      /**
       * 行业
       */
      industry?: string;
      /**
       * 标签
       */
      labels?: string[];
      /**
       * 项目logo
       */
      logo?: string;
      /**
       * 协作者
       */
      members?: string[];
      /**
       * 项目名称
       */
      name?: string;
      /**
       * 所属命名空间
       */
      ns?: string;
      /**
       * 项目负责人 (userId)
       */
      owner?: string;
      /**
       * 项目管理人员 userid
       */
      pm?: string[];
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 项目阶段
       */
      stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
      /**
       * 计划开始时间
       */
      startAt?: Date;
      /**
       * 项目状态
       */
      state?: "OPEN" | "CLOSED";
      /**
       * 文档摘要，可以用于简介或者目录
       */
      summary?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 项目名称
       */
      name: string;
      /**
       * 项目负责人 (userId)
       */
      owner: string;
      /**
       * 项目状态
       */
      state: "OPEN" | "CLOSED";
    };
    /**
     * 状态
     */
    state: "OPEN" | "CLOSED";
  };
}
export interface DeleteMilestoneRequest {
  milestoneId: string;
}
export interface GetBoardRequest {
  boardId: string;
}
export interface GetBoardResponse {
  /**
   * 泳道
   */
  body: {
    /**
     * 看板描述
     */
    description?: string;
    /**
     * 看板名称
     */
    name?: string;
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 看板名称
     */
    name: string;
    fields?: ({
      /**
       * 表单字段描述
       */
      description?: string;
      /**
       * 是否是必须的字段
       */
      required?: boolean;
      /**
       * 表单字段key
       */
      key: string;
      /**
       * 表单字段名称
       */
      name: string;
      /**
       * 表单字段类型
       */
      type: string;
      /**
       * 字段的占位字符
       */
      placeholder?: string;
      /**
       * 表单字段的默认值
       */
      defaultValue?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    })[];
    flows?: ({
      /**
       * 工作流描述
       */
      description?: string;
      /**
       * 工作流名称
       */
      name?: string;
      /**
       * 限制工作流允许操作的角色
       */
      roles?: string[];
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 工作流名称
       */
      name: string;
      fields?: ({
        /**
         * 表单字段描述
         */
        description?: string;
        /**
         * 是否是必须的字段
         */
        required?: boolean;
        /**
         * 表单字段key
         */
        key: string;
        /**
         * 表单字段名称
         */
        name: string;
        /**
         * 表单字段类型
         */
        type: string;
        /**
         * 字段的占位字符
         */
        placeholder?: string;
        /**
         * 表单字段的默认值
         */
        defaultValue?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      })[];
      /**
       * 来源泳道
       */
      from: {
        /**
         * 泳道automations
         */
        automations?: string[];
        /**
         * 泳道描述
         */
        description?: string;
        /**
         * 泳道名称
         */
        name?: string;
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 必须填写的字段
         */
        requires?: string[];
        /**
         * 限制将卡片拖动到该泳道的角色
         */
        roles?: string[];
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 泳道名称
         */
        name: string;
      };
      /**
       * 目标泳道
       */
      to: {
        /**
         * 泳道automations
         */
        automations?: string[];
        /**
         * 泳道描述
         */
        description?: string;
        /**
         * 泳道名称
         */
        name?: string;
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 必须填写的字段
         */
        requires?: string[];
        /**
         * 限制将卡片拖动到该泳道的角色
         */
        roles?: string[];
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 泳道名称
         */
        name: string;
      };
    })[];
    lanes?: ({
      /**
       * 泳道automations
       */
      automations?: string[];
      /**
       * 泳道描述
       */
      description?: string;
      /**
       * 泳道名称
       */
      name?: string;
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 必须填写的字段
       */
      requires?: string[];
      /**
       * 限制将卡片拖动到该泳道的角色
       */
      roles?: string[];
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 泳道名称
       */
      name: string;
    })[];
  };
}
export interface GetTicketsStatisticsRequest {
  query?: {
    _group?: (
      | "id"
      | "lane"
      | "milestone"
      | "level"
      | "priority"
      | "state"
      | "project"
      | "takeBy"
      | "type"
      | "risk"
    )[];
    milestone?: string[];
    project?: string[];
    lane?: string[];
    priority?: (0 | 1 | 2)[];
    reopen?: boolean;
    deadline_gte?: Date;
    deadline_lte?: Date;
    title_like?: string;
    takeBy?: string[];
    publishBy?: string[];
    level?: (0 | 1 | 2 | 3 | 4 | 5 | 6)[];
    createBy?: string[];
    labels?: string[];
    state?: "OPEN" | "CLOSED";
    type?: string[];
    published?: boolean;
    publishAt_lte?: Date;
    publishAt_gte?: Date;
    /**
     * ticket risk
     */
    risk?: "RISK_DELAY" | "RISK_URGENCY" | "RISK_RETENTION";
  };
}
export interface GetTicketsStatisticsResponse {
  body: {
    /**
     * ticket id
     */
    id?: string;
    /**
     * 所属项目 (projectId)
     */
    project?: string;
    /**
     * 所属里程碑 (milestoneId)
     */
    milestone?: string;
    /**
     * 所属泳道 (laneId)
     */
    lane?: string;
    /**
     * 级别
     */
    level?: number;
    /**
     * 领取人 (userId)
     */
    takeBy?: string | null;
    priority?: 0 | 1 | 2;
    state?: "OPEN" | "CLOSED";
    /**
     * ticket 类型
     */
    type?: string;
    /**
     * 统计数量
     */
    count?: number;
    /**
     * ticket risk
     */
    risk?: "NO_RISK" | "RISK_DELAY" | "RISK_URGENCY" | "RISK_RETENTION";
  }[];
}
export type DateTime = Date;

export type TicketPriority = 0 | 1 | 2;

export type TicketLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type State = "OPEN" | "CLOSED";

/**
 * ticket risk
 */
export type TicketRisk = "NO_RISK" | "RISK_DELAY" | "RISK_URGENCY" | "RISK_RETENTION";

export type TicketStatisticGroup =
  | "id"
  | "lane"
  | "milestone"
  | "level"
  | "priority"
  | "state"
  | "project"
  | "takeBy"
  | "type"
  | "risk";

/**
 * ticket 类型
 */
export type TicketType = string;

/**
 * project 阶段
 */
export type ProjectStage = "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";

/**
 * 第三方资源关联
 */
export interface Reference {
  /**
   * 资源在第三方的 origin id
   */
  oid: string;
  /**
   * 来源
   */
  source: string;
  /**
   * 名称
   */
  name?: string;
  /**
   * 描述
   */
  description?: string;
  /**
   * 类型
   */
  type?: string;
  /**
   * 唯一地址
   */
  uri?: string;
}

/**
 * 项目，工单的最高组织形式
 */
export interface ProjectDoc {
  /**
   * 项目实际开始激活的时间
   */
  activeAt?: Date;
  /**
   * 项目实际关闭时间
   */
  closeAt?: Date;
  /**
   * 项目描述
   */
  description?: string;
  /**
   * 计划结束时间
   */
  endAt?: Date;
  /**
   * 行业
   */
  industry?: string;
  /**
   * 标签
   */
  labels?: string[];
  /**
   * 项目logo
   */
  logo?: string;
  /**
   * 协作者
   */
  members?: string[];
  /**
   * 项目名称
   */
  name?: string;
  /**
   * 所属命名空间
   */
  ns?: string;
  /**
   * 项目负责人 (userId)
   */
  owner?: string;
  /**
   * 项目管理人员 userid
   */
  pm?: string[];
  refs?: {
    /**
     * 资源在第三方的 origin id
     */
    oid: string;
    /**
     * 来源
     */
    source: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    description?: string;
    /**
     * 类型
     */
    type?: string;
    /**
     * 唯一地址
     */
    uri?: string;
  }[];
  /**
   * 项目阶段
   */
  stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
  /**
   * 计划开始时间
   */
  startAt?: Date;
  /**
   * 项目状态
   */
  state?: "OPEN" | "CLOSED";
  /**
   * 文档摘要，可以用于简介或者目录
   */
  summary?: string;
}

/**
 * 项目创建文档
 */
export type ProjectCreateDoc = {
  /**
   * 项目实际开始激活的时间
   */
  activeAt?: Date;
  /**
   * 项目实际关闭时间
   */
  closeAt?: Date;
  /**
   * 项目描述
   */
  description?: string;
  /**
   * 计划结束时间
   */
  endAt?: Date;
  /**
   * 行业
   */
  industry?: string;
  /**
   * 标签
   */
  labels?: string[];
  /**
   * 项目logo
   */
  logo?: string;
  /**
   * 协作者
   */
  members?: string[];
  /**
   * 项目名称
   */
  name?: string;
  /**
   * 所属命名空间
   */
  ns?: string;
  /**
   * 项目负责人 (userId)
   */
  owner?: string;
  /**
   * 项目管理人员 userid
   */
  pm?: string[];
  refs?: {
    /**
     * 资源在第三方的 origin id
     */
    oid: string;
    /**
     * 来源
     */
    source: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    description?: string;
    /**
     * 类型
     */
    type?: string;
    /**
     * 唯一地址
     */
    uri?: string;
  }[];
  /**
   * 项目阶段
   */
  stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
  /**
   * 计划开始时间
   */
  startAt?: Date;
  /**
   * 项目状态
   */
  state?: "OPEN" | "CLOSED";
  /**
   * 文档摘要，可以用于简介或者目录
   */
  summary?: string;
} & {
  /**
   * 项目名称
   */
  name: string;
  /**
   * 项目负责人 (userId)
   */
  owner: string;
};

/**
 * 项目
 */
export type Project = {
  /**
   * 项目实际开始激活的时间
   */
  activeAt?: Date;
  /**
   * 项目实际关闭时间
   */
  closeAt?: Date;
  /**
   * 项目描述
   */
  description?: string;
  /**
   * 计划结束时间
   */
  endAt?: Date;
  /**
   * 行业
   */
  industry?: string;
  /**
   * 标签
   */
  labels?: string[];
  /**
   * 项目logo
   */
  logo?: string;
  /**
   * 协作者
   */
  members?: string[];
  /**
   * 项目名称
   */
  name?: string;
  /**
   * 所属命名空间
   */
  ns?: string;
  /**
   * 项目负责人 (userId)
   */
  owner?: string;
  /**
   * 项目管理人员 userid
   */
  pm?: string[];
  refs?: {
    /**
     * 资源在第三方的 origin id
     */
    oid: string;
    /**
     * 来源
     */
    source: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    description?: string;
    /**
     * 类型
     */
    type?: string;
    /**
     * 唯一地址
     */
    uri?: string;
  }[];
  /**
   * 项目阶段
   */
  stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
  /**
   * 计划开始时间
   */
  startAt?: Date;
  /**
   * 项目状态
   */
  state?: "OPEN" | "CLOSED";
  /**
   * 文档摘要，可以用于简介或者目录
   */
  summary?: string;
} & {
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
} & {
  /**
   * 项目名称
   */
  name: string;
  /**
   * 项目负责人 (userId)
   */
  owner: string;
  /**
   * 项目状态
   */
  state: "OPEN" | "CLOSED";
};

/**
 * 里程碑 Doc
 */
export interface MilestoneDoc {
  /**
   * 实际里程碑开始激活的时间
   */
  activeAt?: Date;
  /**
   * 实际里程碑关闭时间
   */
  closeAt?: Date;
  /**
   * 里程碑描述
   */
  description?: string;
  /**
   * 计划结束时间
   */
  endAt?: Date;
  /**
   * 里程碑名称
   */
  name?: string;
  refs?: {
    /**
     * 资源在第三方的 origin id
     */
    oid: string;
    /**
     * 来源
     */
    source: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    description?: string;
    /**
     * 类型
     */
    type?: string;
    /**
     * 唯一地址
     */
    uri?: string;
  }[];
  /**
   * 计划开始时间
   */
  startAt?: Date;
  /**
   * 状态
   */
  state?: "OPEN" | "CLOSED";
}

export type MilestoneCreateDoc = {
  /**
   * 实际里程碑开始激活的时间
   */
  activeAt?: Date;
  /**
   * 实际里程碑关闭时间
   */
  closeAt?: Date;
  /**
   * 里程碑描述
   */
  description?: string;
  /**
   * 计划结束时间
   */
  endAt?: Date;
  /**
   * 里程碑名称
   */
  name?: string;
  refs?: {
    /**
     * 资源在第三方的 origin id
     */
    oid: string;
    /**
     * 来源
     */
    source: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    description?: string;
    /**
     * 类型
     */
    type?: string;
    /**
     * 唯一地址
     */
    uri?: string;
  }[];
  /**
   * 计划开始时间
   */
  startAt?: Date;
  /**
   * 状态
   */
  state?: "OPEN" | "CLOSED";
} & {
  /**
   * 里程碑名称
   */
  name: string;
  /**
   * 关联的project
   */
  project: string;
};

/**
 * 里程碑
 */
export type Milestone = {
  /**
   * 实际里程碑开始激活的时间
   */
  activeAt?: Date;
  /**
   * 实际里程碑关闭时间
   */
  closeAt?: Date;
  /**
   * 里程碑描述
   */
  description?: string;
  /**
   * 计划结束时间
   */
  endAt?: Date;
  /**
   * 里程碑名称
   */
  name?: string;
  refs?: {
    /**
     * 资源在第三方的 origin id
     */
    oid: string;
    /**
     * 来源
     */
    source: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    description?: string;
    /**
     * 类型
     */
    type?: string;
    /**
     * 唯一地址
     */
    uri?: string;
  }[];
  /**
   * 计划开始时间
   */
  startAt?: Date;
  /**
   * 状态
   */
  state?: "OPEN" | "CLOSED";
} & {
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
} & {
  /**
   * 里程碑名称
   */
  name: string;
  /**
   * 关联的project
   */
  project: {
    /**
     * 项目实际开始激活的时间
     */
    activeAt?: Date;
    /**
     * 项目实际关闭时间
     */
    closeAt?: Date;
    /**
     * 项目描述
     */
    description?: string;
    /**
     * 计划结束时间
     */
    endAt?: Date;
    /**
     * 行业
     */
    industry?: string;
    /**
     * 标签
     */
    labels?: string[];
    /**
     * 项目logo
     */
    logo?: string;
    /**
     * 协作者
     */
    members?: string[];
    /**
     * 项目名称
     */
    name?: string;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 项目负责人 (userId)
     */
    owner?: string;
    /**
     * 项目管理人员 userid
     */
    pm?: string[];
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 项目阶段
     */
    stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
    /**
     * 计划开始时间
     */
    startAt?: Date;
    /**
     * 项目状态
     */
    state?: "OPEN" | "CLOSED";
    /**
     * 文档摘要，可以用于简介或者目录
     */
    summary?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 项目名称
     */
    name: string;
    /**
     * 项目负责人 (userId)
     */
    owner: string;
    /**
     * 项目状态
     */
    state: "OPEN" | "CLOSED";
  };
  /**
   * 状态
   */
  state: "OPEN" | "CLOSED";
};

/**
 * 表单字段
 */
export interface FieldDoc {
  /**
   * 表单字段描述
   */
  description?: string;
  /**
   * 是否是必须的字段
   */
  required?: boolean;
  /**
   * 表单字段key
   */
  key: string;
  /**
   * 表单字段名称
   */
  name: string;
  /**
   * 表单字段类型
   */
  type: string;
  /**
   * 字段的占位字符
   */
  placeholder?: string;
  /**
   * 表单字段的默认值
   */
  defaultValue?: string;
}

export type Field = {
  /**
   * 表单字段描述
   */
  description?: string;
  /**
   * 是否是必须的字段
   */
  required?: boolean;
  /**
   * 表单字段key
   */
  key: string;
  /**
   * 表单字段名称
   */
  name: string;
  /**
   * 表单字段类型
   */
  type: string;
  /**
   * 字段的占位字符
   */
  placeholder?: string;
  /**
   * 表单字段的默认值
   */
  defaultValue?: string;
} & {
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
};

/**
 * 工作流 Doc
 */
export interface FlowDoc {
  /**
   * 工作流描述
   */
  description?: string;
  /**
   * 工作流名称
   */
  name?: string;
  /**
   * 限制工作流允许操作的角色
   */
  roles?: string[];
}

export type FlowCreateDoc = {
  /**
   * 工作流描述
   */
  description?: string;
  /**
   * 工作流名称
   */
  name?: string;
  /**
   * 限制工作流允许操作的角色
   */
  roles?: string[];
} & {
  fields?: string[];
  /**
   * 来源泳道
   */
  from: string;
  /**
   * 工作流名称
   */
  name: string;
  /**
   * 目标泳道
   */
  to: string;
};

export type Flow = {
  /**
   * 工作流描述
   */
  description?: string;
  /**
   * 工作流名称
   */
  name?: string;
  /**
   * 限制工作流允许操作的角色
   */
  roles?: string[];
} & {
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
} & {
  /**
   * 工作流名称
   */
  name: string;
  fields?: ({
    /**
     * 表单字段描述
     */
    description?: string;
    /**
     * 是否是必须的字段
     */
    required?: boolean;
    /**
     * 表单字段key
     */
    key: string;
    /**
     * 表单字段名称
     */
    name: string;
    /**
     * 表单字段类型
     */
    type: string;
    /**
     * 字段的占位字符
     */
    placeholder?: string;
    /**
     * 表单字段的默认值
     */
    defaultValue?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  })[];
  /**
   * 来源泳道
   */
  from: {
    /**
     * 泳道automations
     */
    automations?: string[];
    /**
     * 泳道描述
     */
    description?: string;
    /**
     * 泳道名称
     */
    name?: string;
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 必须填写的字段
     */
    requires?: string[];
    /**
     * 限制将卡片拖动到该泳道的角色
     */
    roles?: string[];
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 泳道名称
     */
    name: string;
  };
  /**
   * 目标泳道
   */
  to: {
    /**
     * 泳道automations
     */
    automations?: string[];
    /**
     * 泳道描述
     */
    description?: string;
    /**
     * 泳道名称
     */
    name?: string;
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 必须填写的字段
     */
    requires?: string[];
    /**
     * 限制将卡片拖动到该泳道的角色
     */
    roles?: string[];
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 泳道名称
     */
    name: string;
  };
};

/**
 * 泳道 Doc
 */
export interface LaneDoc {
  /**
   * 泳道automations
   */
  automations?: string[];
  /**
   * 泳道描述
   */
  description?: string;
  /**
   * 泳道名称
   */
  name?: string;
  refs?: {
    /**
     * 资源在第三方的 origin id
     */
    oid: string;
    /**
     * 来源
     */
    source: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    description?: string;
    /**
     * 类型
     */
    type?: string;
    /**
     * 唯一地址
     */
    uri?: string;
  }[];
  /**
   * 必须填写的字段
   */
  requires?: string[];
  /**
   * 限制将卡片拖动到该泳道的角色
   */
  roles?: string[];
}

/**
 * 泳道创建文档
 */
export type LaneCreateDoc = {
  /**
   * 泳道automations
   */
  automations?: string[];
  /**
   * 泳道描述
   */
  description?: string;
  /**
   * 泳道名称
   */
  name?: string;
  refs?: {
    /**
     * 资源在第三方的 origin id
     */
    oid: string;
    /**
     * 来源
     */
    source: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    description?: string;
    /**
     * 类型
     */
    type?: string;
    /**
     * 唯一地址
     */
    uri?: string;
  }[];
  /**
   * 必须填写的字段
   */
  requires?: string[];
  /**
   * 限制将卡片拖动到该泳道的角色
   */
  roles?: string[];
} & {
  /**
   * 泳道名称
   */
  name: string;
};

/**
 * 泳道
 */
export type Lane = {
  /**
   * 泳道automations
   */
  automations?: string[];
  /**
   * 泳道描述
   */
  description?: string;
  /**
   * 泳道名称
   */
  name?: string;
  refs?: {
    /**
     * 资源在第三方的 origin id
     */
    oid: string;
    /**
     * 来源
     */
    source: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    description?: string;
    /**
     * 类型
     */
    type?: string;
    /**
     * 唯一地址
     */
    uri?: string;
  }[];
  /**
   * 必须填写的字段
   */
  requires?: string[];
  /**
   * 限制将卡片拖动到该泳道的角色
   */
  roles?: string[];
} & {
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
} & {
  /**
   * 泳道名称
   */
  name: string;
};

/**
 * 流程看板
 */
export interface BoardDoc {
  /**
   * 看板描述
   */
  description?: string;
  /**
   * 看板名称
   */
  name?: string;
  refs?: {
    /**
     * 资源在第三方的 origin id
     */
    oid: string;
    /**
     * 来源
     */
    source: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    description?: string;
    /**
     * 类型
     */
    type?: string;
    /**
     * 唯一地址
     */
    uri?: string;
  }[];
}

/**
 * 看板创建文档
 */
export type BoardCreateDoc = {
  /**
   * 看板描述
   */
  description?: string;
  /**
   * 看板名称
   */
  name?: string;
  refs?: {
    /**
     * 资源在第三方的 origin id
     */
    oid: string;
    /**
     * 来源
     */
    source: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    description?: string;
    /**
     * 类型
     */
    type?: string;
    /**
     * 唯一地址
     */
    uri?: string;
  }[];
} & {
  /**
   * 看板名称
   */
  name: string;
  fields?: {
    /**
     * 表单字段描述
     */
    description?: string;
    /**
     * 是否是必须的字段
     */
    required?: boolean;
    /**
     * 表单字段key
     */
    key: string;
    /**
     * 表单字段名称
     */
    name: string;
    /**
     * 表单字段类型
     */
    type: string;
    /**
     * 字段的占位字符
     */
    placeholder?: string;
    /**
     * 表单字段的默认值
     */
    defaultValue?: string;
  }[];
  flows?: ({
    /**
     * 工作流描述
     */
    description?: string;
    /**
     * 工作流名称
     */
    name?: string;
    /**
     * 限制工作流允许操作的角色
     */
    roles?: string[];
  } & {
    fields?: string[];
    /**
     * 来源泳道
     */
    from: string;
    /**
     * 工作流名称
     */
    name: string;
    /**
     * 目标泳道
     */
    to: string;
  })[];
  lanes?: ({
    /**
     * 泳道automations
     */
    automations?: string[];
    /**
     * 泳道描述
     */
    description?: string;
    /**
     * 泳道名称
     */
    name?: string;
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 必须填写的字段
     */
    requires?: string[];
    /**
     * 限制将卡片拖动到该泳道的角色
     */
    roles?: string[];
  } & {
    /**
     * 泳道名称
     */
    name: string;
  })[];
};

/**
 * 泳道
 */
export type Board = {
  /**
   * 看板描述
   */
  description?: string;
  /**
   * 看板名称
   */
  name?: string;
  refs?: {
    /**
     * 资源在第三方的 origin id
     */
    oid: string;
    /**
     * 来源
     */
    source: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    description?: string;
    /**
     * 类型
     */
    type?: string;
    /**
     * 唯一地址
     */
    uri?: string;
  }[];
} & {
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
} & {
  /**
   * 看板名称
   */
  name: string;
  fields?: ({
    /**
     * 表单字段描述
     */
    description?: string;
    /**
     * 是否是必须的字段
     */
    required?: boolean;
    /**
     * 表单字段key
     */
    key: string;
    /**
     * 表单字段名称
     */
    name: string;
    /**
     * 表单字段类型
     */
    type: string;
    /**
     * 字段的占位字符
     */
    placeholder?: string;
    /**
     * 表单字段的默认值
     */
    defaultValue?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  })[];
  flows?: ({
    /**
     * 工作流描述
     */
    description?: string;
    /**
     * 工作流名称
     */
    name?: string;
    /**
     * 限制工作流允许操作的角色
     */
    roles?: string[];
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 工作流名称
     */
    name: string;
    fields?: ({
      /**
       * 表单字段描述
       */
      description?: string;
      /**
       * 是否是必须的字段
       */
      required?: boolean;
      /**
       * 表单字段key
       */
      key: string;
      /**
       * 表单字段名称
       */
      name: string;
      /**
       * 表单字段类型
       */
      type: string;
      /**
       * 字段的占位字符
       */
      placeholder?: string;
      /**
       * 表单字段的默认值
       */
      defaultValue?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    })[];
    /**
     * 来源泳道
     */
    from: {
      /**
       * 泳道automations
       */
      automations?: string[];
      /**
       * 泳道描述
       */
      description?: string;
      /**
       * 泳道名称
       */
      name?: string;
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 必须填写的字段
       */
      requires?: string[];
      /**
       * 限制将卡片拖动到该泳道的角色
       */
      roles?: string[];
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 泳道名称
       */
      name: string;
    };
    /**
     * 目标泳道
     */
    to: {
      /**
       * 泳道automations
       */
      automations?: string[];
      /**
       * 泳道描述
       */
      description?: string;
      /**
       * 泳道名称
       */
      name?: string;
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 必须填写的字段
       */
      requires?: string[];
      /**
       * 限制将卡片拖动到该泳道的角色
       */
      roles?: string[];
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 泳道名称
       */
      name: string;
    };
  })[];
  lanes?: ({
    /**
     * 泳道automations
     */
    automations?: string[];
    /**
     * 泳道描述
     */
    description?: string;
    /**
     * 泳道名称
     */
    name?: string;
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 必须填写的字段
     */
    requires?: string[];
    /**
     * 限制将卡片拖动到该泳道的角色
     */
    roles?: string[];
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 泳道名称
     */
    name: string;
  })[];
};

/**
 * 提交的任务数据
 */
export interface ActionDoc {
  /**
   * 任务备注
   */
  remark?: string;
  /**
   * 任务名称
   */
  name?: string;
  /**
   * 上传的数据
   */
  payload?: {
    [k: string]: any;
  };
}

/**
 * 任务创建文档
 */
export type ActionCreateDoc = {
  /**
   * 任务备注
   */
  remark?: string;
  /**
   * 任务名称
   */
  name?: string;
  /**
   * 上传的数据
   */
  payload?: {
    [k: string]: any;
  };
} & {
  /**
   * 任务名称
   */
  name: string;
  /**
   * 对应看板 ID
   */
  board: string;
  /**
   * 对应工作流 ID
   */
  flow: string;
  /**
   * 对应工单 ID
   */
  ticket: string;
};

/**
 * 任务载体
 */
export type Action = {
  /**
   * 任务备注
   */
  remark?: string;
  /**
   * 任务名称
   */
  name?: string;
  /**
   * 上传的数据
   */
  payload?: {
    [k: string]: any;
  };
} & {
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
} & {
  /**
   * 任务名称
   */
  name: string;
  /**
   * 对应工作流
   */
  flow: {
    /**
     * 工作流描述
     */
    description?: string;
    /**
     * 工作流名称
     */
    name?: string;
    /**
     * 限制工作流允许操作的角色
     */
    roles?: string[];
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 工作流名称
     */
    name: string;
    fields?: ({
      /**
       * 表单字段描述
       */
      description?: string;
      /**
       * 是否是必须的字段
       */
      required?: boolean;
      /**
       * 表单字段key
       */
      key: string;
      /**
       * 表单字段名称
       */
      name: string;
      /**
       * 表单字段类型
       */
      type: string;
      /**
       * 字段的占位字符
       */
      placeholder?: string;
      /**
       * 表单字段的默认值
       */
      defaultValue?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    })[];
    /**
     * 来源泳道
     */
    from: {
      /**
       * 泳道automations
       */
      automations?: string[];
      /**
       * 泳道描述
       */
      description?: string;
      /**
       * 泳道名称
       */
      name?: string;
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 必须填写的字段
       */
      requires?: string[];
      /**
       * 限制将卡片拖动到该泳道的角色
       */
      roles?: string[];
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 泳道名称
       */
      name: string;
    };
    /**
     * 目标泳道
     */
    to: {
      /**
       * 泳道automations
       */
      automations?: string[];
      /**
       * 泳道描述
       */
      description?: string;
      /**
       * 泳道名称
       */
      name?: string;
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 必须填写的字段
       */
      requires?: string[];
      /**
       * 限制将卡片拖动到该泳道的角色
       */
      roles?: string[];
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 泳道名称
       */
      name: string;
    };
  };
  /**
   * 对应工单
   */
  ticket: {
    /**
     * 额外奖励
     */
    bonus?: number;
    /**
     * 赏金
     */
    bounty?: number;
    /**
     * 关闭时间
     */
    closeAt?: Date;
    /**
     * ticket 的内容
     */
    content?: string;
    /**
     * 第三方数据
     */
    data?: {
      [k: string]: any;
    };
    /**
     * 截止时间
     */
    deadline?: Date;
    labels?: string[];
    level?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 父级卡片
     */
    parent?: string;
    priority?: 0 | 1 | 2;
    /**
     * 发布时间
     */
    publishAt?: Date;
    /**
     * 发布人 (userId)
     */
    publishBy?: string | null;
    /**
     * 是否被发布
     */
    published?: boolean;
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 备注
     */
    remark?: string;
    /**
     * 是否 reopened 过
     */
    reopen?: boolean;
    reopenAt?: Date;
    /**
     * ticket risk
     */
    risk?: "NO_RISK" | "RISK_DELAY" | "RISK_URGENCY" | "RISK_RETENTION";
    shiftAt?: Date;
    /**
     * project 阶段
     */
    stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
    state?: "OPEN" | "CLOSED";
    /**
     * 领取时间
     */
    takeAt?: Date;
    /**
     * 领取人 (userId)
     */
    takeBy?: string | null;
    /**
     * ticket 的标题
     */
    title?: string;
    /**
     * ticket 的类别
     */
    type?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * ticket 的标题
     */
    title: string;
    /**
     * 当前工单对应的可操作流程
     */
    flows?: ({
      /**
       * 工作流描述
       */
      description?: string;
      /**
       * 工作流名称
       */
      name?: string;
      /**
       * 限制工作流允许操作的角色
       */
      roles?: string[];
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 工作流名称
       */
      name: string;
      fields?: ({
        /**
         * 表单字段描述
         */
        description?: string;
        /**
         * 是否是必须的字段
         */
        required?: boolean;
        /**
         * 表单字段key
         */
        key: string;
        /**
         * 表单字段名称
         */
        name: string;
        /**
         * 表单字段类型
         */
        type: string;
        /**
         * 字段的占位字符
         */
        placeholder?: string;
        /**
         * 表单字段的默认值
         */
        defaultValue?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      })[];
      /**
       * 来源泳道
       */
      from: {
        /**
         * 泳道automations
         */
        automations?: string[];
        /**
         * 泳道描述
         */
        description?: string;
        /**
         * 泳道名称
         */
        name?: string;
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 必须填写的字段
         */
        requires?: string[];
        /**
         * 限制将卡片拖动到该泳道的角色
         */
        roles?: string[];
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 泳道名称
         */
        name: string;
      };
      /**
       * 目标泳道
       */
      to: {
        /**
         * 泳道automations
         */
        automations?: string[];
        /**
         * 泳道描述
         */
        description?: string;
        /**
         * 泳道名称
         */
        name?: string;
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 必须填写的字段
         */
        requires?: string[];
        /**
         * 限制将卡片拖动到该泳道的角色
         */
        roles?: string[];
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 泳道名称
         */
        name: string;
      };
    })[];
    /**
     * 所属泳道
     */
    lane?: {
      /**
       * 泳道automations
       */
      automations?: string[];
      /**
       * 泳道描述
       */
      description?: string;
      /**
       * 泳道名称
       */
      name?: string;
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 必须填写的字段
       */
      requires?: string[];
      /**
       * 限制将卡片拖动到该泳道的角色
       */
      roles?: string[];
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 泳道名称
       */
      name: string;
    };
    /**
     * 所属里程碑
     */
    milestone?: {
      /**
       * 实际里程碑开始激活的时间
       */
      activeAt?: Date;
      /**
       * 实际里程碑关闭时间
       */
      closeAt?: Date;
      /**
       * 里程碑描述
       */
      description?: string;
      /**
       * 计划结束时间
       */
      endAt?: Date;
      /**
       * 里程碑名称
       */
      name?: string;
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 计划开始时间
       */
      startAt?: Date;
      /**
       * 状态
       */
      state?: "OPEN" | "CLOSED";
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 里程碑名称
       */
      name: string;
      /**
       * 关联的project
       */
      project: {
        /**
         * 项目实际开始激活的时间
         */
        activeAt?: Date;
        /**
         * 项目实际关闭时间
         */
        closeAt?: Date;
        /**
         * 项目描述
         */
        description?: string;
        /**
         * 计划结束时间
         */
        endAt?: Date;
        /**
         * 行业
         */
        industry?: string;
        /**
         * 标签
         */
        labels?: string[];
        /**
         * 项目logo
         */
        logo?: string;
        /**
         * 协作者
         */
        members?: string[];
        /**
         * 项目名称
         */
        name?: string;
        /**
         * 所属命名空间
         */
        ns?: string;
        /**
         * 项目负责人 (userId)
         */
        owner?: string;
        /**
         * 项目管理人员 userid
         */
        pm?: string[];
        refs?: {
          /**
           * 资源在第三方的 origin id
           */
          oid: string;
          /**
           * 来源
           */
          source: string;
          /**
           * 名称
           */
          name?: string;
          /**
           * 描述
           */
          description?: string;
          /**
           * 类型
           */
          type?: string;
          /**
           * 唯一地址
           */
          uri?: string;
        }[];
        /**
         * 项目阶段
         */
        stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
        /**
         * 计划开始时间
         */
        startAt?: Date;
        /**
         * 项目状态
         */
        state?: "OPEN" | "CLOSED";
        /**
         * 文档摘要，可以用于简介或者目录
         */
        summary?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      } & {
        /**
         * 项目名称
         */
        name: string;
        /**
         * 项目负责人 (userId)
         */
        owner: string;
        /**
         * 项目状态
         */
        state: "OPEN" | "CLOSED";
      };
      /**
       * 状态
       */
      state: "OPEN" | "CLOSED";
    };
    /**
     * 所属项目
     */
    project: {
      /**
       * 项目实际开始激活的时间
       */
      activeAt?: Date;
      /**
       * 项目实际关闭时间
       */
      closeAt?: Date;
      /**
       * 项目描述
       */
      description?: string;
      /**
       * 计划结束时间
       */
      endAt?: Date;
      /**
       * 行业
       */
      industry?: string;
      /**
       * 标签
       */
      labels?: string[];
      /**
       * 项目logo
       */
      logo?: string;
      /**
       * 协作者
       */
      members?: string[];
      /**
       * 项目名称
       */
      name?: string;
      /**
       * 所属命名空间
       */
      ns?: string;
      /**
       * 项目负责人 (userId)
       */
      owner?: string;
      /**
       * 项目管理人员 userid
       */
      pm?: string[];
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 项目阶段
       */
      stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
      /**
       * 计划开始时间
       */
      startAt?: Date;
      /**
       * 项目状态
       */
      state?: "OPEN" | "CLOSED";
      /**
       * 文档摘要，可以用于简介或者目录
       */
      summary?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 项目名称
       */
      name: string;
      /**
       * 项目负责人 (userId)
       */
      owner: string;
      /**
       * 项目状态
       */
      state: "OPEN" | "CLOSED";
    };
    state: "OPEN" | "CLOSED";
  };
};

/**
 * Ticket statstics result
 */
export interface TicketStats {
  /**
   * ticket id
   */
  id?: string;
  /**
   * 所属项目 (projectId)
   */
  project?: string;
  /**
   * 所属里程碑 (milestoneId)
   */
  milestone?: string;
  /**
   * 所属泳道 (laneId)
   */
  lane?: string;
  /**
   * 级别
   */
  level?: number;
  /**
   * 领取人 (userId)
   */
  takeBy?: string | null;
  priority?: 0 | 1 | 2;
  state?: "OPEN" | "CLOSED";
  /**
   * ticket 类型
   */
  type?: string;
  /**
   * 统计数量
   */
  count?: number;
  /**
   * ticket risk
   */
  risk?: "NO_RISK" | "RISK_DELAY" | "RISK_URGENCY" | "RISK_RETENTION";
}

/**
 * Ticket Doc
 */
export interface TicketDoc {
  /**
   * 额外奖励
   */
  bonus?: number;
  /**
   * 赏金
   */
  bounty?: number;
  /**
   * 关闭时间
   */
  closeAt?: Date;
  /**
   * ticket 的内容
   */
  content?: string;
  /**
   * 第三方数据
   */
  data?: {
    [k: string]: any;
  };
  /**
   * 截止时间
   */
  deadline?: Date;
  labels?: string[];
  level?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  /**
   * 所属命名空间
   */
  ns?: string;
  /**
   * 父级卡片
   */
  parent?: string;
  priority?: 0 | 1 | 2;
  /**
   * 发布时间
   */
  publishAt?: Date;
  /**
   * 发布人 (userId)
   */
  publishBy?: string | null;
  /**
   * 是否被发布
   */
  published?: boolean;
  refs?: {
    /**
     * 资源在第三方的 origin id
     */
    oid: string;
    /**
     * 来源
     */
    source: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    description?: string;
    /**
     * 类型
     */
    type?: string;
    /**
     * 唯一地址
     */
    uri?: string;
  }[];
  /**
   * 备注
   */
  remark?: string;
  /**
   * 是否 reopened 过
   */
  reopen?: boolean;
  reopenAt?: Date;
  /**
   * ticket risk
   */
  risk?: "NO_RISK" | "RISK_DELAY" | "RISK_URGENCY" | "RISK_RETENTION";
  shiftAt?: Date;
  /**
   * project 阶段
   */
  stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
  state?: "OPEN" | "CLOSED";
  /**
   * 领取时间
   */
  takeAt?: Date;
  /**
   * 领取人 (userId)
   */
  takeBy?: string | null;
  /**
   * ticket 的标题
   */
  title?: string;
  /**
   * ticket 的类别
   */
  type?: string;
}

export type TicketCreateDoc = {
  /**
   * 额外奖励
   */
  bonus?: number;
  /**
   * 赏金
   */
  bounty?: number;
  /**
   * 关闭时间
   */
  closeAt?: Date;
  /**
   * ticket 的内容
   */
  content?: string;
  /**
   * 第三方数据
   */
  data?: {
    [k: string]: any;
  };
  /**
   * 截止时间
   */
  deadline?: Date;
  labels?: string[];
  level?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  /**
   * 所属命名空间
   */
  ns?: string;
  /**
   * 父级卡片
   */
  parent?: string;
  priority?: 0 | 1 | 2;
  /**
   * 发布时间
   */
  publishAt?: Date;
  /**
   * 发布人 (userId)
   */
  publishBy?: string | null;
  /**
   * 是否被发布
   */
  published?: boolean;
  refs?: {
    /**
     * 资源在第三方的 origin id
     */
    oid: string;
    /**
     * 来源
     */
    source: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    description?: string;
    /**
     * 类型
     */
    type?: string;
    /**
     * 唯一地址
     */
    uri?: string;
  }[];
  /**
   * 备注
   */
  remark?: string;
  /**
   * 是否 reopened 过
   */
  reopen?: boolean;
  reopenAt?: Date;
  /**
   * ticket risk
   */
  risk?: "NO_RISK" | "RISK_DELAY" | "RISK_URGENCY" | "RISK_RETENTION";
  shiftAt?: Date;
  /**
   * project 阶段
   */
  stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
  state?: "OPEN" | "CLOSED";
  /**
   * 领取时间
   */
  takeAt?: Date;
  /**
   * 领取人 (userId)
   */
  takeBy?: string | null;
  /**
   * ticket 的标题
   */
  title?: string;
  /**
   * ticket 的类别
   */
  type?: string;
} & {
  /**
   * ticket 的标题
   */
  title: string;
  /**
   * 所属看板
   */
  board: string;
  /**
   * 当前工单对应的可操作流程
   */
  flows?: string[];
  /**
   * 所属泳道
   */
  lane?: string;
  /**
   * 所属里程碑
   */
  milestone?: string;
  /**
   * 所属项目
   */
  project: string;
};

export type TicketUpdateDoc = {
  /**
   * 额外奖励
   */
  bonus?: number;
  /**
   * 赏金
   */
  bounty?: number;
  /**
   * 关闭时间
   */
  closeAt?: Date;
  /**
   * ticket 的内容
   */
  content?: string;
  /**
   * 第三方数据
   */
  data?: {
    [k: string]: any;
  };
  /**
   * 截止时间
   */
  deadline?: Date;
  labels?: string[];
  level?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  /**
   * 所属命名空间
   */
  ns?: string;
  /**
   * 父级卡片
   */
  parent?: string;
  priority?: 0 | 1 | 2;
  /**
   * 发布时间
   */
  publishAt?: Date;
  /**
   * 发布人 (userId)
   */
  publishBy?: string | null;
  /**
   * 是否被发布
   */
  published?: boolean;
  refs?: {
    /**
     * 资源在第三方的 origin id
     */
    oid: string;
    /**
     * 来源
     */
    source: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    description?: string;
    /**
     * 类型
     */
    type?: string;
    /**
     * 唯一地址
     */
    uri?: string;
  }[];
  /**
   * 备注
   */
  remark?: string;
  /**
   * 是否 reopened 过
   */
  reopen?: boolean;
  reopenAt?: Date;
  /**
   * ticket risk
   */
  risk?: "NO_RISK" | "RISK_DELAY" | "RISK_URGENCY" | "RISK_RETENTION";
  shiftAt?: Date;
  /**
   * project 阶段
   */
  stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
  state?: "OPEN" | "CLOSED";
  /**
   * 领取时间
   */
  takeAt?: Date;
  /**
   * 领取人 (userId)
   */
  takeBy?: string | null;
  /**
   * ticket 的标题
   */
  title?: string;
  /**
   * ticket 的类别
   */
  type?: string;
} & {
  /**
   * ticket 的标题
   */
  title?: string;
  /**
   * 所属看板
   */
  board?: string;
  /**
   * 当前工单对应的可操作流程
   */
  flows?: string[];
  /**
   * 所属泳道
   */
  lane?: string;
  /**
   * 所属里程碑
   */
  milestone?: string;
  /**
   * 所属项目
   */
  project?: string;
};

/**
 * 工单
 */
export type Ticket = {
  /**
   * 额外奖励
   */
  bonus?: number;
  /**
   * 赏金
   */
  bounty?: number;
  /**
   * 关闭时间
   */
  closeAt?: Date;
  /**
   * ticket 的内容
   */
  content?: string;
  /**
   * 第三方数据
   */
  data?: {
    [k: string]: any;
  };
  /**
   * 截止时间
   */
  deadline?: Date;
  labels?: string[];
  level?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  /**
   * 所属命名空间
   */
  ns?: string;
  /**
   * 父级卡片
   */
  parent?: string;
  priority?: 0 | 1 | 2;
  /**
   * 发布时间
   */
  publishAt?: Date;
  /**
   * 发布人 (userId)
   */
  publishBy?: string | null;
  /**
   * 是否被发布
   */
  published?: boolean;
  refs?: {
    /**
     * 资源在第三方的 origin id
     */
    oid: string;
    /**
     * 来源
     */
    source: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 描述
     */
    description?: string;
    /**
     * 类型
     */
    type?: string;
    /**
     * 唯一地址
     */
    uri?: string;
  }[];
  /**
   * 备注
   */
  remark?: string;
  /**
   * 是否 reopened 过
   */
  reopen?: boolean;
  reopenAt?: Date;
  /**
   * ticket risk
   */
  risk?: "NO_RISK" | "RISK_DELAY" | "RISK_URGENCY" | "RISK_RETENTION";
  shiftAt?: Date;
  /**
   * project 阶段
   */
  stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
  state?: "OPEN" | "CLOSED";
  /**
   * 领取时间
   */
  takeAt?: Date;
  /**
   * 领取人 (userId)
   */
  takeBy?: string | null;
  /**
   * ticket 的标题
   */
  title?: string;
  /**
   * ticket 的类别
   */
  type?: string;
} & {
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
} & {
  /**
   * ticket 的标题
   */
  title: string;
  /**
   * 当前工单对应的可操作流程
   */
  flows?: ({
    /**
     * 工作流描述
     */
    description?: string;
    /**
     * 工作流名称
     */
    name?: string;
    /**
     * 限制工作流允许操作的角色
     */
    roles?: string[];
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 工作流名称
     */
    name: string;
    fields?: ({
      /**
       * 表单字段描述
       */
      description?: string;
      /**
       * 是否是必须的字段
       */
      required?: boolean;
      /**
       * 表单字段key
       */
      key: string;
      /**
       * 表单字段名称
       */
      name: string;
      /**
       * 表单字段类型
       */
      type: string;
      /**
       * 字段的占位字符
       */
      placeholder?: string;
      /**
       * 表单字段的默认值
       */
      defaultValue?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    })[];
    /**
     * 来源泳道
     */
    from: {
      /**
       * 泳道automations
       */
      automations?: string[];
      /**
       * 泳道描述
       */
      description?: string;
      /**
       * 泳道名称
       */
      name?: string;
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 必须填写的字段
       */
      requires?: string[];
      /**
       * 限制将卡片拖动到该泳道的角色
       */
      roles?: string[];
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 泳道名称
       */
      name: string;
    };
    /**
     * 目标泳道
     */
    to: {
      /**
       * 泳道automations
       */
      automations?: string[];
      /**
       * 泳道描述
       */
      description?: string;
      /**
       * 泳道名称
       */
      name?: string;
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 必须填写的字段
       */
      requires?: string[];
      /**
       * 限制将卡片拖动到该泳道的角色
       */
      roles?: string[];
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 泳道名称
       */
      name: string;
    };
  })[];
  /**
   * 所属泳道
   */
  lane?: {
    /**
     * 泳道automations
     */
    automations?: string[];
    /**
     * 泳道描述
     */
    description?: string;
    /**
     * 泳道名称
     */
    name?: string;
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 必须填写的字段
     */
    requires?: string[];
    /**
     * 限制将卡片拖动到该泳道的角色
     */
    roles?: string[];
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 泳道名称
     */
    name: string;
  };
  /**
   * 所属里程碑
   */
  milestone?: {
    /**
     * 实际里程碑开始激活的时间
     */
    activeAt?: Date;
    /**
     * 实际里程碑关闭时间
     */
    closeAt?: Date;
    /**
     * 里程碑描述
     */
    description?: string;
    /**
     * 计划结束时间
     */
    endAt?: Date;
    /**
     * 里程碑名称
     */
    name?: string;
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 计划开始时间
     */
    startAt?: Date;
    /**
     * 状态
     */
    state?: "OPEN" | "CLOSED";
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 里程碑名称
     */
    name: string;
    /**
     * 关联的project
     */
    project: {
      /**
       * 项目实际开始激活的时间
       */
      activeAt?: Date;
      /**
       * 项目实际关闭时间
       */
      closeAt?: Date;
      /**
       * 项目描述
       */
      description?: string;
      /**
       * 计划结束时间
       */
      endAt?: Date;
      /**
       * 行业
       */
      industry?: string;
      /**
       * 标签
       */
      labels?: string[];
      /**
       * 项目logo
       */
      logo?: string;
      /**
       * 协作者
       */
      members?: string[];
      /**
       * 项目名称
       */
      name?: string;
      /**
       * 所属命名空间
       */
      ns?: string;
      /**
       * 项目负责人 (userId)
       */
      owner?: string;
      /**
       * 项目管理人员 userid
       */
      pm?: string[];
      refs?: {
        /**
         * 资源在第三方的 origin id
         */
        oid: string;
        /**
         * 来源
         */
        source: string;
        /**
         * 名称
         */
        name?: string;
        /**
         * 描述
         */
        description?: string;
        /**
         * 类型
         */
        type?: string;
        /**
         * 唯一地址
         */
        uri?: string;
      }[];
      /**
       * 项目阶段
       */
      stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
      /**
       * 计划开始时间
       */
      startAt?: Date;
      /**
       * 项目状态
       */
      state?: "OPEN" | "CLOSED";
      /**
       * 文档摘要，可以用于简介或者目录
       */
      summary?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    } & {
      /**
       * 项目名称
       */
      name: string;
      /**
       * 项目负责人 (userId)
       */
      owner: string;
      /**
       * 项目状态
       */
      state: "OPEN" | "CLOSED";
    };
    /**
     * 状态
     */
    state: "OPEN" | "CLOSED";
  };
  /**
   * 所属项目
   */
  project: {
    /**
     * 项目实际开始激活的时间
     */
    activeAt?: Date;
    /**
     * 项目实际关闭时间
     */
    closeAt?: Date;
    /**
     * 项目描述
     */
    description?: string;
    /**
     * 计划结束时间
     */
    endAt?: Date;
    /**
     * 行业
     */
    industry?: string;
    /**
     * 标签
     */
    labels?: string[];
    /**
     * 项目logo
     */
    logo?: string;
    /**
     * 协作者
     */
    members?: string[];
    /**
     * 项目名称
     */
    name?: string;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 项目负责人 (userId)
     */
    owner?: string;
    /**
     * 项目管理人员 userid
     */
    pm?: string[];
    refs?: {
      /**
       * 资源在第三方的 origin id
       */
      oid: string;
      /**
       * 来源
       */
      source: string;
      /**
       * 名称
       */
      name?: string;
      /**
       * 描述
       */
      description?: string;
      /**
       * 类型
       */
      type?: string;
      /**
       * 唯一地址
       */
      uri?: string;
    }[];
    /**
     * 项目阶段
     */
    stage?: "INIT" | "DEVELOPMENT" | "DELIVERY" | "MAINTAIN";
    /**
     * 计划开始时间
     */
    startAt?: Date;
    /**
     * 项目状态
     */
    state?: "OPEN" | "CLOSED";
    /**
     * 文档摘要，可以用于简介或者目录
     */
    summary?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * 项目名称
     */
    name: string;
    /**
     * 项目负责人 (userId)
     */
    owner: string;
    /**
     * 项目状态
     */
    state: "OPEN" | "CLOSED";
  };
  state: "OPEN" | "CLOSED";
};

export interface MemberDoc {
  /**
   * member
   */
  id: string;
}

export interface MongoDefault {
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
}

export interface Err {
  code?: string;
  type?: string;
  message: boolean;
  name: string;
  details?: {
    keyword?: string;
    message?: string;
    path?: string;
    value?: string;
  }[];
}

export = SDK;
