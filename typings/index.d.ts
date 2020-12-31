declare class SDK {
  constructor(opts?: Options);

  base: string;
  token: string | (() => string);
  auth: string;

  project: ProjectAPI;
  ticket: TicketAPI;
  lane: LaneAPI;
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
   * List all repositories
   */
  listRepositories(req: ListRepositoriesRequest): Promise<ListRepositoriesResponse>;
  /**
   * Create a repository
   */
  createRepository(req: CreateRepositoryRequest): Promise<CreateRepositoryResponse>;
  /**
   * Find repository by id
   */
  getRepository(req: GetRepositoryRequest): Promise<GetRepositoryResponse>;
  /**
   * Update repository
   */
  updateRepository(req: UpdateRepositoryRequest): Promise<UpdateRepositoryResponse>;
  /**
   * Delete repository
   */
  deleteRepository(req: DeleteRepositoryRequest): Promise<void>;
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
export interface TicketAPI {
  /**
   * List all tickets
   */
  listTickets(req: ListTicketsRequest): Promise<ListTicketsResponse>;
  /**
   * Find ticket by id
   */
  getTicket(req: GetTicketRequest): Promise<GetTicketResponse>;
  /**
   * move ticket to another lane
   */
  moveTicket(req: MoveTicketRequest): Promise<MoveTicketResponse>;
  /**
   * Create a ticket
   */
  createTicket(req: CreateTicketRequest): Promise<CreateTicketResponse>;
  /**
   * Update ticket
   */
  updateTicket(req: UpdateTicketRequest): Promise<UpdateTicketResponse>;
  /**
   * Delete ticket
   */
  deleteTicket(req: DeleteTicketRequest): Promise<void>;
  /**
   * candidate take ticket
   */
  takeTicket(req: TakeTicketRequest): Promise<TakeTicketResponse>;
  /**
   * candidate undo ticket
   */
  undoTicket(req: UndoTicketRequest): Promise<UndoTicketResponse>;
  /**
   * candidate done ticket
   */
  doneTicket(req: DoneTicketRequest): Promise<DoneTicketResponse>;
}
export interface LaneAPI {
  /**
   * List all lanes
   */
  listLanes(req: ListLanesRequest): Promise<ListLanesResponse>;
  /**
   * Create a lane
   */
  createLane(req: CreateLaneRequest): Promise<CreateLaneResponse>;
  /**
   * Find lane by id
   */
  getLane(req: GetLaneRequest): Promise<GetLaneResponse>;
  /**
   * Update lane
   */
  updateLane(req: UpdateLaneRequest): Promise<UpdateLaneResponse>;
  /**
   * Delete lane
   */
  deleteLane(req: DeleteLaneRequest): Promise<void>;
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
    _select?: string;
    owner?: string;
    name_like?: string;
    pm?: string;
    state?: "OPEN" | "CLOSED";
  };
}
export interface ListProjectsResponse {
  content: ({
    /**
     * 项目实际开始激活的时间
     */
    activeAt?: string;
    /**
     * 项目实际关闭时间
     */
    closeAt?: Date;
    /**
     * 计划结束时间
     */
    endAt?: Date;
    /**
     * 计划开始时间
     */
    startAt?: Date;
    /**
     * 项目描述
     */
    description?: string;
    /**
     * 行业
     */
    industry?: string;
    /**
     * 项目logo
     */
    logo?: string;
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
    /**
     * 项目的里程碑
     */
    milestones?: ({
      /**
       * 计划开始时间
       */
      startAt?: Date;
      /**
       * 计划结束时间
       */
      endAt?: Date;
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
       * 状态
       */
      state?: "OPEN" | "CLOSED";
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    })[];
    /**
     * 项目的子工程
     */
    repositories?: ({
      /**
       * 工程描述
       */
      description?: string;
      /**
       * 工程名称
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
    })[];
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
  })[];
  headers: {
    "X-Total-Count"?: number;
  };
}
export interface CreateProjectRequest {
  body: {
    /**
     * 项目实际开始激活的时间
     */
    activeAt?: string;
    /**
     * 项目实际关闭时间
     */
    closeAt?: Date;
    /**
     * 计划结束时间
     */
    endAt?: Date;
    /**
     * 计划开始时间
     */
    startAt?: Date;
    /**
     * 项目描述
     */
    description?: string;
    /**
     * 行业
     */
    industry?: string;
    /**
     * 项目logo
     */
    logo?: string;
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
    owner: {
      [k: string]: any;
    };
  };
}
export interface CreateProjectResponse {
  /**
   * 项目
   */
  content: {
    /**
     * 项目实际开始激活的时间
     */
    activeAt?: string;
    /**
     * 项目实际关闭时间
     */
    closeAt?: Date;
    /**
     * 计划结束时间
     */
    endAt?: Date;
    /**
     * 计划开始时间
     */
    startAt?: Date;
    /**
     * 项目描述
     */
    description?: string;
    /**
     * 行业
     */
    industry?: string;
    /**
     * 项目logo
     */
    logo?: string;
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
    /**
     * 项目的里程碑
     */
    milestones?: ({
      /**
       * 计划开始时间
       */
      startAt?: Date;
      /**
       * 计划结束时间
       */
      endAt?: Date;
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
       * 状态
       */
      state?: "OPEN" | "CLOSED";
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    })[];
    /**
     * 项目的子工程
     */
    repositories?: ({
      /**
       * 工程描述
       */
      description?: string;
      /**
       * 工程名称
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
    })[];
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
  };
}
export interface GetProjectRequest {
  projectId: string;
}
export interface GetProjectResponse {
  /**
   * 项目
   */
  content: {
    /**
     * 项目实际开始激活的时间
     */
    activeAt?: string;
    /**
     * 项目实际关闭时间
     */
    closeAt?: Date;
    /**
     * 计划结束时间
     */
    endAt?: Date;
    /**
     * 计划开始时间
     */
    startAt?: Date;
    /**
     * 项目描述
     */
    description?: string;
    /**
     * 行业
     */
    industry?: string;
    /**
     * 项目logo
     */
    logo?: string;
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
    /**
     * 项目的里程碑
     */
    milestones?: ({
      /**
       * 计划开始时间
       */
      startAt?: Date;
      /**
       * 计划结束时间
       */
      endAt?: Date;
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
       * 状态
       */
      state?: "OPEN" | "CLOSED";
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    })[];
    /**
     * 项目的子工程
     */
    repositories?: ({
      /**
       * 工程描述
       */
      description?: string;
      /**
       * 工程名称
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
    })[];
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
  };
}
export interface UpdateProjectRequest {
  projectId: string;
  /**
   * 项目，工单的最高组织形式
   */
  body: {
    /**
     * 项目实际开始激活的时间
     */
    activeAt?: string;
    /**
     * 项目实际关闭时间
     */
    closeAt?: Date;
    /**
     * 计划结束时间
     */
    endAt?: Date;
    /**
     * 计划开始时间
     */
    startAt?: Date;
    /**
     * 项目描述
     */
    description?: string;
    /**
     * 行业
     */
    industry?: string;
    /**
     * 项目logo
     */
    logo?: string;
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
  content: {
    /**
     * 项目实际开始激活的时间
     */
    activeAt?: string;
    /**
     * 项目实际关闭时间
     */
    closeAt?: Date;
    /**
     * 计划结束时间
     */
    endAt?: Date;
    /**
     * 计划开始时间
     */
    startAt?: Date;
    /**
     * 项目描述
     */
    description?: string;
    /**
     * 行业
     */
    industry?: string;
    /**
     * 项目logo
     */
    logo?: string;
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
    /**
     * 项目的里程碑
     */
    milestones?: ({
      /**
       * 计划开始时间
       */
      startAt?: Date;
      /**
       * 计划结束时间
       */
      endAt?: Date;
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
       * 状态
       */
      state?: "OPEN" | "CLOSED";
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    })[];
    /**
     * 项目的子工程
     */
    repositories?: ({
      /**
       * 工程描述
       */
      description?: string;
      /**
       * 工程名称
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
    })[];
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
  };
}
export interface DeleteProjectRequest {
  projectId: string;
}
export interface ListRepositoriesRequest {
  projectId: string;
}
export interface ListRepositoriesResponse {
  content: ({
    /**
     * 工程描述
     */
    description?: string;
    /**
     * 工程名称
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
  })[];
  headers: {
    "X-Total-Count"?: number;
  };
}
export interface CreateRepositoryRequest {
  projectId: string;
  body: {
    /**
     * 工程描述
     */
    description?: string;
    /**
     * 工程名称
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
     * 项目名称
     */
    name: string;
  };
}
export interface CreateRepositoryResponse {
  /**
   * 工程
   */
  content: {
    /**
     * 工程描述
     */
    description?: string;
    /**
     * 工程名称
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
  };
}
export interface GetRepositoryRequest {
  projectId: string;
  repositoryId: string;
}
export interface GetRepositoryResponse {
  /**
   * 工程
   */
  content: {
    /**
     * 工程描述
     */
    description?: string;
    /**
     * 工程名称
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
  };
}
export interface UpdateRepositoryRequest {
  projectId: string;
  repositoryId: string;
  /**
   * 工程，一个项目有多个工程
   */
  body: {
    /**
     * 工程描述
     */
    description?: string;
    /**
     * 工程名称
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
  };
}
export interface UpdateRepositoryResponse {
  /**
   * 工程
   */
  content: {
    /**
     * 工程描述
     */
    description?: string;
    /**
     * 工程名称
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
  };
}
export interface DeleteRepositoryRequest {
  projectId: string;
  repositoryId: string;
}
export interface ListMilestonesRequest {
  projectId: string;
}
export interface ListMilestonesResponse {
  content: ({
    /**
     * 计划开始时间
     */
    startAt?: Date;
    /**
     * 计划结束时间
     */
    endAt?: Date;
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
     * 状态
     */
    state?: "OPEN" | "CLOSED";
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  })[];
  headers: {
    "X-Total-Count"?: number;
  };
}
export interface CreateMilestoneRequest {
  projectId: string;
  body: {
    /**
     * 计划开始时间
     */
    startAt?: Date;
    /**
     * 计划结束时间
     */
    endAt?: Date;
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
     * 状态
     */
    state?: "OPEN" | "CLOSED";
  } & {
    /**
     * 里程碑名称
     */
    name: string;
  };
}
export interface CreateMilestoneResponse {
  /**
   * 里程碑
   */
  content: {
    /**
     * 计划开始时间
     */
    startAt?: Date;
    /**
     * 计划结束时间
     */
    endAt?: Date;
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
     * 状态
     */
    state?: "OPEN" | "CLOSED";
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface GetMilestoneRequest {
  projectId: string;
  milestoneId: string;
}
export interface GetMilestoneResponse {
  /**
   * 里程碑
   */
  content: {
    /**
     * 计划开始时间
     */
    startAt?: Date;
    /**
     * 计划结束时间
     */
    endAt?: Date;
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
     * 状态
     */
    state?: "OPEN" | "CLOSED";
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface UpdateMilestoneRequest {
  projectId: string;
  milestoneId: string;
  /**
   * 里程碑 Doc
   */
  body: {
    /**
     * 计划开始时间
     */
    startAt?: Date;
    /**
     * 计划结束时间
     */
    endAt?: Date;
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
     * 状态
     */
    state?: "OPEN" | "CLOSED";
  };
}
export interface UpdateMilestoneResponse {
  /**
   * 里程碑
   */
  content: {
    /**
     * 计划开始时间
     */
    startAt?: Date;
    /**
     * 计划结束时间
     */
    endAt?: Date;
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
     * 状态
     */
    state?: "OPEN" | "CLOSED";
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface DeleteMilestoneRequest {
  projectId: string;
  milestoneId: string;
}
export interface ListTicketsRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string;
    milestone?: string;
    project?: string;
    lane?: string;
    repositories?: string;
    priority?: 0 | 1 | 2;
    reopen?: boolean;
    deadline_gt?: Date;
    deadline_lt?: Date;
    title_like?: string;
    takeBy?: string;
    createBy?: string;
    publishBy?: string;
    level?: number;
    labels?: string;
    state?: "OPEN" | "CLOSED";
  };
}
export interface ListTicketsResponse {
  content: ({
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
    repositories?: string[];
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
     * 赏金
     */
    bounty?: number;
    /**
     * 额外奖励
     */
    bonus?: number;
    /**
     * 截止时间
     */
    deadline?: Date;
    /**
     * 完成时间
     */
    doneAt?: Date;
    labels?: string[];
    /**
     * 级别
     */
    level?: number;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 优先级
     */
    priority?: 0 | 1 | 2;
    /**
     * 发布人 (userId)
     */
    publishBy?: string | null;
    /**
     * 发布时间
     */
    publishAt?: Date;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 是否 reopened 过
     */
    reopen?: boolean;
    reopenAt?: Date;
    reopenBy?: string;
    /**
     * 状态
     */
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
     * 创建时间
     */
    createAt?: Date;
    /**
     * 创建人 (userId)
     */
    createBy?: string;
    /**
     * ticket 的标题
     */
    title?: string;
    /**
     * ticket 的内容
     */
    content?: string;
    /**
     * 额外的第三方数据，用于一些特殊处理
     */
    data?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  })[];
  headers: {
    "X-Total-Count"?: number;
  };
}
export interface GetTicketRequest {
  ticketId: string;
}
export interface GetTicketResponse {
  /**
   * 工单
   */
  content: {
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
    repositories?: string[];
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
     * 赏金
     */
    bounty?: number;
    /**
     * 额外奖励
     */
    bonus?: number;
    /**
     * 截止时间
     */
    deadline?: Date;
    /**
     * 完成时间
     */
    doneAt?: Date;
    labels?: string[];
    /**
     * 级别
     */
    level?: number;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 优先级
     */
    priority?: 0 | 1 | 2;
    /**
     * 发布人 (userId)
     */
    publishBy?: string | null;
    /**
     * 发布时间
     */
    publishAt?: Date;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 是否 reopened 过
     */
    reopen?: boolean;
    reopenAt?: Date;
    reopenBy?: string;
    /**
     * 状态
     */
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
     * 创建时间
     */
    createAt?: Date;
    /**
     * 创建人 (userId)
     */
    createBy?: string;
    /**
     * ticket 的标题
     */
    title?: string;
    /**
     * ticket 的内容
     */
    content?: string;
    /**
     * 额外的第三方数据，用于一些特殊处理
     */
    data?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface MoveTicketRequest {
  ticketId: string;
  /**
   * Ticket Move body
   */
  body: {
    /**
     * the lane which is the destination of current action
     */
    lane?: string;
  };
}
export interface MoveTicketResponse {
  /**
   * 工单
   */
  content: {
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
    repositories?: string[];
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
     * 赏金
     */
    bounty?: number;
    /**
     * 额外奖励
     */
    bonus?: number;
    /**
     * 截止时间
     */
    deadline?: Date;
    /**
     * 完成时间
     */
    doneAt?: Date;
    labels?: string[];
    /**
     * 级别
     */
    level?: number;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 优先级
     */
    priority?: 0 | 1 | 2;
    /**
     * 发布人 (userId)
     */
    publishBy?: string | null;
    /**
     * 发布时间
     */
    publishAt?: Date;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 是否 reopened 过
     */
    reopen?: boolean;
    reopenAt?: Date;
    reopenBy?: string;
    /**
     * 状态
     */
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
     * 创建时间
     */
    createAt?: Date;
    /**
     * 创建人 (userId)
     */
    createBy?: string;
    /**
     * ticket 的标题
     */
    title?: string;
    /**
     * ticket 的内容
     */
    content?: string;
    /**
     * 额外的第三方数据，用于一些特殊处理
     */
    data?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface CreateTicketRequest {
  projectId: string;
  body: {
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
    repositories?: string[];
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
     * 赏金
     */
    bounty?: number;
    /**
     * 额外奖励
     */
    bonus?: number;
    /**
     * 截止时间
     */
    deadline?: Date;
    /**
     * 完成时间
     */
    doneAt?: Date;
    labels?: string[];
    /**
     * 级别
     */
    level?: number;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 优先级
     */
    priority?: 0 | 1 | 2;
    /**
     * 发布人 (userId)
     */
    publishBy?: string | null;
    /**
     * 发布时间
     */
    publishAt?: Date;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 是否 reopened 过
     */
    reopen?: boolean;
    reopenAt?: Date;
    reopenBy?: string;
    /**
     * 状态
     */
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
     * 创建时间
     */
    createAt?: Date;
    /**
     * 创建人 (userId)
     */
    createBy?: string;
    /**
     * ticket 的标题
     */
    title?: string;
    /**
     * ticket 的内容
     */
    content?: string;
    /**
     * 额外的第三方数据，用于一些特殊处理
     */
    data?: string;
  } & {
    /**
     * ticket 的标题
     */
    title: string;
  };
}
export interface CreateTicketResponse {
  /**
   * 工单
   */
  content: {
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
    repositories?: string[];
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
     * 赏金
     */
    bounty?: number;
    /**
     * 额外奖励
     */
    bonus?: number;
    /**
     * 截止时间
     */
    deadline?: Date;
    /**
     * 完成时间
     */
    doneAt?: Date;
    labels?: string[];
    /**
     * 级别
     */
    level?: number;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 优先级
     */
    priority?: 0 | 1 | 2;
    /**
     * 发布人 (userId)
     */
    publishBy?: string | null;
    /**
     * 发布时间
     */
    publishAt?: Date;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 是否 reopened 过
     */
    reopen?: boolean;
    reopenAt?: Date;
    reopenBy?: string;
    /**
     * 状态
     */
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
     * 创建时间
     */
    createAt?: Date;
    /**
     * 创建人 (userId)
     */
    createBy?: string;
    /**
     * ticket 的标题
     */
    title?: string;
    /**
     * ticket 的内容
     */
    content?: string;
    /**
     * 额外的第三方数据，用于一些特殊处理
     */
    data?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface UpdateTicketRequest {
  projectId: string;
  ticketId: string;
  /**
   * Ticket Doc
   */
  body: {
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
    repositories?: string[];
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
     * 赏金
     */
    bounty?: number;
    /**
     * 额外奖励
     */
    bonus?: number;
    /**
     * 截止时间
     */
    deadline?: Date;
    /**
     * 完成时间
     */
    doneAt?: Date;
    labels?: string[];
    /**
     * 级别
     */
    level?: number;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 优先级
     */
    priority?: 0 | 1 | 2;
    /**
     * 发布人 (userId)
     */
    publishBy?: string | null;
    /**
     * 发布时间
     */
    publishAt?: Date;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 是否 reopened 过
     */
    reopen?: boolean;
    reopenAt?: Date;
    reopenBy?: string;
    /**
     * 状态
     */
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
     * 创建时间
     */
    createAt?: Date;
    /**
     * 创建人 (userId)
     */
    createBy?: string;
    /**
     * ticket 的标题
     */
    title?: string;
    /**
     * ticket 的内容
     */
    content?: string;
    /**
     * 额外的第三方数据，用于一些特殊处理
     */
    data?: string;
  };
}
export interface UpdateTicketResponse {
  /**
   * 工单
   */
  content: {
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
    repositories?: string[];
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
     * 赏金
     */
    bounty?: number;
    /**
     * 额外奖励
     */
    bonus?: number;
    /**
     * 截止时间
     */
    deadline?: Date;
    /**
     * 完成时间
     */
    doneAt?: Date;
    labels?: string[];
    /**
     * 级别
     */
    level?: number;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 优先级
     */
    priority?: 0 | 1 | 2;
    /**
     * 发布人 (userId)
     */
    publishBy?: string | null;
    /**
     * 发布时间
     */
    publishAt?: Date;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 是否 reopened 过
     */
    reopen?: boolean;
    reopenAt?: Date;
    reopenBy?: string;
    /**
     * 状态
     */
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
     * 创建时间
     */
    createAt?: Date;
    /**
     * 创建人 (userId)
     */
    createBy?: string;
    /**
     * ticket 的标题
     */
    title?: string;
    /**
     * ticket 的内容
     */
    content?: string;
    /**
     * 额外的第三方数据，用于一些特殊处理
     */
    data?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface DeleteTicketRequest {
  projectId: string;
  ticketId: string;
}
export interface TakeTicketRequest {
  projectId: string;
  ticketId: string;
  /**
   * Ticket Event Take Doc
   */
  body: {
    /**
     * user id
     */
    user?: string;
  };
}
export interface TakeTicketResponse {
  /**
   * 工单
   */
  content: {
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
    repositories?: string[];
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
     * 赏金
     */
    bounty?: number;
    /**
     * 额外奖励
     */
    bonus?: number;
    /**
     * 截止时间
     */
    deadline?: Date;
    /**
     * 完成时间
     */
    doneAt?: Date;
    labels?: string[];
    /**
     * 级别
     */
    level?: number;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 优先级
     */
    priority?: 0 | 1 | 2;
    /**
     * 发布人 (userId)
     */
    publishBy?: string | null;
    /**
     * 发布时间
     */
    publishAt?: Date;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 是否 reopened 过
     */
    reopen?: boolean;
    reopenAt?: Date;
    reopenBy?: string;
    /**
     * 状态
     */
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
     * 创建时间
     */
    createAt?: Date;
    /**
     * 创建人 (userId)
     */
    createBy?: string;
    /**
     * ticket 的标题
     */
    title?: string;
    /**
     * ticket 的内容
     */
    content?: string;
    /**
     * 额外的第三方数据，用于一些特殊处理
     */
    data?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface UndoTicketRequest {
  projectId: string;
  ticketId: string;
  /**
   * Ticket Event Undo Doc
   */
  body: {
    /**
     * user id
     */
    user?: string;
  };
}
export interface UndoTicketResponse {
  /**
   * 工单
   */
  content: {
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
    repositories?: string[];
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
     * 赏金
     */
    bounty?: number;
    /**
     * 额外奖励
     */
    bonus?: number;
    /**
     * 截止时间
     */
    deadline?: Date;
    /**
     * 完成时间
     */
    doneAt?: Date;
    labels?: string[];
    /**
     * 级别
     */
    level?: number;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 优先级
     */
    priority?: 0 | 1 | 2;
    /**
     * 发布人 (userId)
     */
    publishBy?: string | null;
    /**
     * 发布时间
     */
    publishAt?: Date;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 是否 reopened 过
     */
    reopen?: boolean;
    reopenAt?: Date;
    reopenBy?: string;
    /**
     * 状态
     */
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
     * 创建时间
     */
    createAt?: Date;
    /**
     * 创建人 (userId)
     */
    createBy?: string;
    /**
     * ticket 的标题
     */
    title?: string;
    /**
     * ticket 的内容
     */
    content?: string;
    /**
     * 额外的第三方数据，用于一些特殊处理
     */
    data?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface DoneTicketRequest {
  projectId: string;
  ticketId: string;
  /**
   * Ticket Event Done Doc
   */
  body: {
    /**
     * user id
     */
    user?: string;
  };
}
export interface DoneTicketResponse {
  /**
   * 工单
   */
  content: {
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
    repositories?: string[];
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
     * 赏金
     */
    bounty?: number;
    /**
     * 额外奖励
     */
    bonus?: number;
    /**
     * 截止时间
     */
    deadline?: Date;
    /**
     * 完成时间
     */
    doneAt?: Date;
    labels?: string[];
    /**
     * 级别
     */
    level?: number;
    /**
     * 所属命名空间
     */
    ns?: string;
    /**
     * 优先级
     */
    priority?: 0 | 1 | 2;
    /**
     * 发布人 (userId)
     */
    publishBy?: string | null;
    /**
     * 发布时间
     */
    publishAt?: Date;
    /**
     * 备注
     */
    remark?: string;
    /**
     * 是否 reopened 过
     */
    reopen?: boolean;
    reopenAt?: Date;
    reopenBy?: string;
    /**
     * 状态
     */
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
     * 创建时间
     */
    createAt?: Date;
    /**
     * 创建人 (userId)
     */
    createBy?: string;
    /**
     * ticket 的标题
     */
    title?: string;
    /**
     * ticket 的内容
     */
    content?: string;
    /**
     * 额外的第三方数据，用于一些特殊处理
     */
    data?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface ListLanesRequest {
  query?: {
    project?: string;
    _limit?: number;
    _offset?: number;
    _sort?: string;
    _select?: string;
  };
}
export interface ListLanesResponse {
  content: ({
    /**
     * 泳道描述
     */
    description?: string;
    /**
     * 泳道名称
     */
    name?: string;
    /**
     * 所属的 project (projectId)
     */
    project?: string;
    /**
     * 限制泳道允许操作的角色
     */
    roles?: string[];
    /**
     * 泳道automations
     */
    automations?: string[];
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
  })[];
  headers: {
    "X-Total-Count"?: number;
  };
}
export interface CreateLaneRequest {
  body: {
    /**
     * 泳道描述
     */
    description?: string;
    /**
     * 泳道名称
     */
    name?: string;
    /**
     * 所属的 project (projectId)
     */
    project?: string;
    /**
     * 限制泳道允许操作的角色
     */
    roles?: string[];
    /**
     * 泳道automations
     */
    automations?: string[];
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
     * 泳道名称
     */
    name: string;
  };
}
export interface CreateLaneResponse {
  /**
   * 泳道可以独立于project存在
   */
  content: {
    /**
     * 泳道描述
     */
    description?: string;
    /**
     * 泳道名称
     */
    name?: string;
    /**
     * 所属的 project (projectId)
     */
    project?: string;
    /**
     * 限制泳道允许操作的角色
     */
    roles?: string[];
    /**
     * 泳道automations
     */
    automations?: string[];
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
  };
}
export interface GetLaneRequest {
  laneId: string;
}
export interface GetLaneResponse {
  /**
   * 泳道可以独立于project存在
   */
  content: {
    /**
     * 泳道描述
     */
    description?: string;
    /**
     * 泳道名称
     */
    name?: string;
    /**
     * 所属的 project (projectId)
     */
    project?: string;
    /**
     * 限制泳道允许操作的角色
     */
    roles?: string[];
    /**
     * 泳道automations
     */
    automations?: string[];
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
  };
}
export interface UpdateLaneRequest {
  laneId: string;
  /**
   * 泳道 Doc
   */
  body: {
    /**
     * 泳道描述
     */
    description?: string;
    /**
     * 泳道名称
     */
    name?: string;
    /**
     * 所属的 project (projectId)
     */
    project?: string;
    /**
     * 限制泳道允许操作的角色
     */
    roles?: string[];
    /**
     * 泳道automations
     */
    automations?: string[];
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
  };
}
export interface UpdateLaneResponse {
  /**
   * 泳道可以独立于project存在
   */
  content: {
    /**
     * 泳道描述
     */
    description?: string;
    /**
     * 泳道名称
     */
    name?: string;
    /**
     * 所属的 project (projectId)
     */
    project?: string;
    /**
     * 限制泳道允许操作的角色
     */
    roles?: string[];
    /**
     * 泳道automations
     */
    automations?: string[];
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
  };
}
export interface DeleteLaneRequest {
  laneId: string;
}
export interface GetTicketsStatisticsRequest {
  query?: {
    _group:
      | ("lane" | "milestone" | "level" | "priority" | "state" | "project" | "takeBy")
      | ("lane" | "milestone" | "level" | "priority" | "state" | "project" | "takeBy")[];
    milestone?: string;
    project?: string;
    lane?: string;
    repositories?: string;
    priority?: 0 | 1 | 2;
    reopen?: boolean;
    deadline_gt?: Date;
    deadline_lt?: Date;
    title_like?: string;
    takeBy?: string;
    createBy?: string;
    publishBy?: string;
    level?: number;
    labels?: string;
    state?: "OPEN" | "CLOSED";
  };
}
export interface GetTicketsStatisticsResponse {
  content: {
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
     * 优先级
     */
    priority?: 0 | 1 | 2;
    /**
     * 领取人 (userId)
     */
    takeBy?: string | null;
    /**
     * 状态
     */
    state?: "OPEN" | "CLOSED";
    /**
     * 统计数量
     */
    count?: number;
  }[];
}
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
  activeAt?: string;
  /**
   * 项目实际关闭时间
   */
  closeAt?: Date;
  /**
   * 计划结束时间
   */
  endAt?: Date;
  /**
   * 计划开始时间
   */
  startAt?: Date;
  /**
   * 项目描述
   */
  description?: string;
  /**
   * 行业
   */
  industry?: string;
  /**
   * 项目logo
   */
  logo?: string;
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
  /**
   * 项目的里程碑
   */
  milestones?: ({
    /**
     * 计划开始时间
     */
    startAt?: Date;
    /**
     * 计划结束时间
     */
    endAt?: Date;
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
     * 状态
     */
    state?: "OPEN" | "CLOSED";
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  })[];
  /**
   * 项目的子工程
   */
  repositories?: ({
    /**
     * 工程描述
     */
    description?: string;
    /**
     * 工程名称
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
  })[];
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
   * 项目状态
   */
  state?: "OPEN" | "CLOSED";
  /**
   * 文档摘要，可以用于简介或者目录
   */
  summary?: string;
}

export type ProjectCreateDoc = {
  /**
   * 项目实际开始激活的时间
   */
  activeAt?: string;
  /**
   * 项目实际关闭时间
   */
  closeAt?: Date;
  /**
   * 计划结束时间
   */
  endAt?: Date;
  /**
   * 计划开始时间
   */
  startAt?: Date;
  /**
   * 项目描述
   */
  description?: string;
  /**
   * 行业
   */
  industry?: string;
  /**
   * 项目logo
   */
  logo?: string;
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
  /**
   * 项目的里程碑
   */
  milestones?: ({
    /**
     * 计划开始时间
     */
    startAt?: Date;
    /**
     * 计划结束时间
     */
    endAt?: Date;
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
     * 状态
     */
    state?: "OPEN" | "CLOSED";
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  })[];
  /**
   * 项目的子工程
   */
  repositories?: ({
    /**
     * 工程描述
     */
    description?: string;
    /**
     * 工程名称
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
  })[];
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
  owner: {
    [k: string]: any;
  };
};

/**
 * 项目
 */
export type Project = {
  /**
   * 项目实际开始激活的时间
   */
  activeAt?: string;
  /**
   * 项目实际关闭时间
   */
  closeAt?: Date;
  /**
   * 计划结束时间
   */
  endAt?: Date;
  /**
   * 计划开始时间
   */
  startAt?: Date;
  /**
   * 项目描述
   */
  description?: string;
  /**
   * 行业
   */
  industry?: string;
  /**
   * 项目logo
   */
  logo?: string;
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
  /**
   * 项目的里程碑
   */
  milestones?: ({
    /**
     * 计划开始时间
     */
    startAt?: Date;
    /**
     * 计划结束时间
     */
    endAt?: Date;
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
     * 状态
     */
    state?: "OPEN" | "CLOSED";
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  })[];
  /**
   * 项目的子工程
   */
  repositories?: ({
    /**
     * 工程描述
     */
    description?: string;
    /**
     * 工程名称
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
  })[];
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
};

/**
 * 工程，一个项目有多个工程
 */
export interface RepositoryDoc {
  /**
   * 工程描述
   */
  description?: string;
  /**
   * 工程名称
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

export type RepositoryCreateDoc = {
  /**
   * 工程描述
   */
  description?: string;
  /**
   * 工程名称
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
   * 项目名称
   */
  name: string;
};

/**
 * 工程
 */
export type Repository = {
  /**
   * 工程描述
   */
  description?: string;
  /**
   * 工程名称
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
};

/**
 * 里程碑 Doc
 */
export interface MilestoneDoc {
  /**
   * 计划开始时间
   */
  startAt?: Date;
  /**
   * 计划结束时间
   */
  endAt?: Date;
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
   * 状态
   */
  state?: "OPEN" | "CLOSED";
}

export type MilestoneCreateDoc = {
  /**
   * 计划开始时间
   */
  startAt?: Date;
  /**
   * 计划结束时间
   */
  endAt?: Date;
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
   * 状态
   */
  state?: "OPEN" | "CLOSED";
} & {
  /**
   * 里程碑名称
   */
  name: string;
};

/**
 * 里程碑
 */
export type Milestone = {
  /**
   * 计划开始时间
   */
  startAt?: Date;
  /**
   * 计划结束时间
   */
  endAt?: Date;
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
   * 状态
   */
  state?: "OPEN" | "CLOSED";
} & {
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
};

/**
 * 泳道 Doc
 */
export interface LaneDoc {
  /**
   * 泳道描述
   */
  description?: string;
  /**
   * 泳道名称
   */
  name?: string;
  /**
   * 所属的 project (projectId)
   */
  project?: string;
  /**
   * 限制泳道允许操作的角色
   */
  roles?: string[];
  /**
   * 泳道automations
   */
  automations?: string[];
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

export type LaneCreateDoc = {
  /**
   * 泳道描述
   */
  description?: string;
  /**
   * 泳道名称
   */
  name?: string;
  /**
   * 所属的 project (projectId)
   */
  project?: string;
  /**
   * 限制泳道允许操作的角色
   */
  roles?: string[];
  /**
   * 泳道automations
   */
  automations?: string[];
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
   * 泳道名称
   */
  name: string;
};

/**
 * 泳道可以独立于project存在
 */
export type Lane = {
  /**
   * 泳道描述
   */
  description?: string;
  /**
   * 泳道名称
   */
  name?: string;
  /**
   * 所属的 project (projectId)
   */
  project?: string;
  /**
   * 限制泳道允许操作的角色
   */
  roles?: string[];
  /**
   * 泳道automations
   */
  automations?: string[];
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
};

/**
 * Ticket Event Take Doc
 */
export interface TicketEventTakeDoc {
  /**
   * user id
   */
  user?: string;
}

/**
 * Ticket Event Undo Doc
 */
export interface TicketEventUndoDoc {
  /**
   * user id
   */
  user?: string;
}

/**
 * Ticket Event Done Doc
 */
export interface TicketEventDoneDoc {
  /**
   * user id
   */
  user?: string;
}

/**
 * Ticket Move body
 */
export interface TicketMoveDoc {
  /**
   * the lane which is the destination of current action
   */
  lane?: string;
}

/**
 * Ticket statstics result
 */
export interface TicketStats {
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
   * 优先级
   */
  priority?: 0 | 1 | 2;
  /**
   * 领取人 (userId)
   */
  takeBy?: string | null;
  /**
   * 状态
   */
  state?: "OPEN" | "CLOSED";
  /**
   * 统计数量
   */
  count?: number;
}

/**
 * Ticket Doc
 */
export interface TicketDoc {
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
  repositories?: string[];
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
   * 赏金
   */
  bounty?: number;
  /**
   * 额外奖励
   */
  bonus?: number;
  /**
   * 截止时间
   */
  deadline?: Date;
  /**
   * 完成时间
   */
  doneAt?: Date;
  labels?: string[];
  /**
   * 级别
   */
  level?: number;
  /**
   * 所属命名空间
   */
  ns?: string;
  /**
   * 优先级
   */
  priority?: 0 | 1 | 2;
  /**
   * 发布人 (userId)
   */
  publishBy?: string | null;
  /**
   * 发布时间
   */
  publishAt?: Date;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 是否 reopened 过
   */
  reopen?: boolean;
  reopenAt?: Date;
  reopenBy?: string;
  /**
   * 状态
   */
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
   * 创建时间
   */
  createAt?: Date;
  /**
   * 创建人 (userId)
   */
  createBy?: string;
  /**
   * ticket 的标题
   */
  title?: string;
  /**
   * ticket 的内容
   */
  content?: string;
  /**
   * 额外的第三方数据，用于一些特殊处理
   */
  data?: string;
}

export type TicketCreateDoc = {
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
  repositories?: string[];
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
   * 赏金
   */
  bounty?: number;
  /**
   * 额外奖励
   */
  bonus?: number;
  /**
   * 截止时间
   */
  deadline?: Date;
  /**
   * 完成时间
   */
  doneAt?: Date;
  labels?: string[];
  /**
   * 级别
   */
  level?: number;
  /**
   * 所属命名空间
   */
  ns?: string;
  /**
   * 优先级
   */
  priority?: 0 | 1 | 2;
  /**
   * 发布人 (userId)
   */
  publishBy?: string | null;
  /**
   * 发布时间
   */
  publishAt?: Date;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 是否 reopened 过
   */
  reopen?: boolean;
  reopenAt?: Date;
  reopenBy?: string;
  /**
   * 状态
   */
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
   * 创建时间
   */
  createAt?: Date;
  /**
   * 创建人 (userId)
   */
  createBy?: string;
  /**
   * ticket 的标题
   */
  title?: string;
  /**
   * ticket 的内容
   */
  content?: string;
  /**
   * 额外的第三方数据，用于一些特殊处理
   */
  data?: string;
} & {
  /**
   * ticket 的标题
   */
  title: string;
};

/**
 * 工单
 */
export type Ticket = {
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
  repositories?: string[];
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
   * 赏金
   */
  bounty?: number;
  /**
   * 额外奖励
   */
  bonus?: number;
  /**
   * 截止时间
   */
  deadline?: Date;
  /**
   * 完成时间
   */
  doneAt?: Date;
  labels?: string[];
  /**
   * 级别
   */
  level?: number;
  /**
   * 所属命名空间
   */
  ns?: string;
  /**
   * 优先级
   */
  priority?: 0 | 1 | 2;
  /**
   * 发布人 (userId)
   */
  publishBy?: string | null;
  /**
   * 发布时间
   */
  publishAt?: Date;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 是否 reopened 过
   */
  reopen?: boolean;
  reopenAt?: Date;
  reopenBy?: string;
  /**
   * 状态
   */
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
   * 创建时间
   */
  createAt?: Date;
  /**
   * 创建人 (userId)
   */
  createBy?: string;
  /**
   * ticket 的标题
   */
  title?: string;
  /**
   * ticket 的内容
   */
  content?: string;
  /**
   * 额外的第三方数据，用于一些特殊处理
   */
  data?: string;
} & {
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
};

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
