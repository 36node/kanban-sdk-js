//@ts-check
import fetch from "@36node/fetch";

export default class SDK {
  /**@type {string} **/
  base;
  /**@type {string} **/
  token;

  /**
   * Sdk auth
   *
   * @returns {string} auth header
   * */
  get auth() {
    let token = this.token;
    // @ts-ignore
    if (typeof token === "function") token = token();
    if (token) return `Bearer ${token}`;

    return "";
  }

  /**
   * Init store sdk
   *
   * @param {Object} opt
   * @param {string} opt.base  base url
   * @param {string} opt.token token for authorization
   */
  constructor(opt = { base: "", token: "" }) {
    this.base = opt.base;
    this.token = opt.token;
  }

  /**
   * project's methods
   */
  project = {
    /**
     * List all projects
     *
     * @param {ListProjectsRequest} req listProjects request
     * @returns {Promise<ListProjectsResponse>} A paged array of projects
     */
    listProjects: req => {
      const { query } = req || {};

      return fetch(`${this.base}/projects`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create a project
     *
     * @param {CreateProjectRequest} req createProject request
     * @returns {Promise<CreateProjectResponse>} The project created
     */
    createProject: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createProject");

      return fetch(`${this.base}/projects`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find project by id
     *
     * @param {GetProjectRequest} req getProject request
     * @returns {Promise<GetProjectResponse>} Expected response to a valid request
     */
    getProject: req => {
      const { projectId } = req || {};

      if (!projectId) throw new Error("projectId is required for getProject");

      return fetch(`${this.base}/projects/${projectId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update project
     *
     * @param {UpdateProjectRequest} req updateProject request
     * @returns {Promise<UpdateProjectResponse>} The project
     */
    updateProject: req => {
      const { projectId, body } = req || {};

      if (!projectId)
        throw new Error("projectId is required for updateProject");
      if (!body) throw new Error("requetBody is required for updateProject");

      return fetch(`${this.base}/projects/${projectId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Delete project
     *
     * @param {DeleteProjectRequest} req deleteProject request
     */
    deleteProject: req => {
      const { projectId } = req || {};

      if (!projectId)
        throw new Error("projectId is required for deleteProject");

      return fetch(`${this.base}/projects/${projectId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * add member for project
     *
     * @param {AddProjectMemberRequest} req addProjectMember request
     * @returns {Promise<AddProjectMemberResponse>} The member
     */
    addProjectMember: req => {
      const { projectId, body } = req || {};

      if (!projectId)
        throw new Error("projectId is required for addProjectMember");
      if (!body) throw new Error("requetBody is required for addProjectMember");

      return fetch(`${this.base}/projects/${projectId}/members`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * remove member for project
     *
     * @param {DeleteProjectMemberRequest} req deleteProjectMember request
     */
    deleteProjectMember: req => {
      const { projectId, memberId } = req || {};

      if (!projectId)
        throw new Error("projectId is required for deleteProjectMember");
      if (!memberId)
        throw new Error("memberId is required for deleteProjectMember");

      return fetch(`${this.base}/projects/${projectId}/members/${memberId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * ticket's methods
   */
  ticket = {
    /**
     * List all tickets
     *
     * @param {ListTicketsRequest} req listTickets request
     * @returns {Promise<ListTicketsResponse>} A paged array of tickets
     */
    listTickets: req => {
      const { query } = req || {};

      return fetch(`${this.base}/tickets`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create a ticket
     *
     * @param {CreateTicketRequest} req createTicket request
     * @returns {Promise<CreateTicketResponse>} The ticket created
     */
    createTicket: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createTicket");

      return fetch(`${this.base}/tickets`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find ticket by id
     *
     * @param {GetTicketRequest} req getTicket request
     * @returns {Promise<GetTicketResponse>} Expected response to a valid request
     */
    getTicket: req => {
      const { ticketId } = req || {};

      if (!ticketId) throw new Error("ticketId is required for getTicket");

      return fetch(`${this.base}/tickets/${ticketId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update ticket
     *
     * @param {UpdateTicketRequest} req updateTicket request
     * @returns {Promise<UpdateTicketResponse>} The updated ticket
     */
    updateTicket: req => {
      const { ticketId, body } = req || {};

      if (!ticketId) throw new Error("ticketId is required for updateTicket");
      if (!body) throw new Error("requetBody is required for updateTicket");

      return fetch(`${this.base}/tickets/${ticketId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Delete ticket
     *
     * @param {DeleteTicketRequest} req deleteTicket request
     */
    deleteTicket: req => {
      const { projectId, ticketId } = req || {};

      if (!projectId) throw new Error("projectId is required for deleteTicket");
      if (!ticketId) throw new Error("ticketId is required for deleteTicket");

      return fetch(`${this.base}/tickets/${ticketId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * take ticket
     *
     * @param {TakeTicketRequest} req takeTicket request
     * @returns {Promise<TakeTicketResponse>} The updated ticket
     */
    takeTicket: req => {
      const { ticketId } = req || {};

      if (!ticketId) throw new Error("ticketId is required for takeTicket");

      return fetch(`${this.base}/tickets/${ticketId}/!take`, {
        method: "POST",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * untake ticket
     *
     * @param {UntakeTicketRequest} req untakeTicket request
     * @returns {Promise<UntakeTicketResponse>} The updated ticket
     */
    untakeTicket: req => {
      const { ticketId } = req || {};

      if (!ticketId) throw new Error("ticketId is required for untakeTicket");

      return fetch(`${this.base}/tickets/${ticketId}/!untake`, {
        method: "POST",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * close ticket
     *
     * @param {CloseTicketRequest} req closeTicket request
     * @returns {Promise<CloseTicketResponse>} The updated ticket
     */
    closeTicket: req => {
      const { ticketId } = req || {};

      if (!ticketId) throw new Error("ticketId is required for closeTicket");

      return fetch(`${this.base}/tickets/${ticketId}/!close`, {
        method: "POST",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * reopen ticket
     *
     * @param {ReopenTicketRequest} req reopenTicket request
     * @returns {Promise<ReopenTicketResponse>} The updated ticket
     */
    reopenTicket: req => {
      const { ticketId } = req || {};

      if (!ticketId) throw new Error("ticketId is required for reopenTicket");

      return fetch(`${this.base}/tickets/${ticketId}/!reopen`, {
        method: "POST",
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * action's methods
   */
  action = {
    /**
     * List all actions
     *
     * @param {ListActionsRequest} req listActions request
     * @returns {Promise<ListActionsResponse>} A paged array of actions
     */
    listActions: req => {
      const { query } = req || {};

      return fetch(`${this.base}/actions`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * create an action to drive ticket in the flows
     *
     * @param {CreateActionRequest} req createAction request
     * @returns {Promise<CreateActionResponse>} The updated ticket
     */
    createAction: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createAction");

      return fetch(`${this.base}/actions`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * milestone's methods
   */
  milestone = {
    /**
     * List all milestones
     *
     * @param {ListMilestonesRequest} req listMilestones request
     * @returns {Promise<ListMilestonesResponse>} A paged array of milestones
     */
    listMilestones: req => {
      const { query } = req || {};

      if (!query) throw new Error("query is required for milestone");

      return fetch(`${this.base}/milestones`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create a milestone
     *
     * @param {CreateMilestoneRequest} req createMilestone request
     * @returns {Promise<CreateMilestoneResponse>} The milestone created
     */
    createMilestone: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createMilestone");

      return fetch(`${this.base}/milestones`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find milestone by id
     *
     * @param {GetMilestoneRequest} req getMilestone request
     * @returns {Promise<GetMilestoneResponse>} Expected response to a valid request
     */
    getMilestone: req => {
      const { milestoneId } = req || {};

      if (!milestoneId)
        throw new Error("milestoneId is required for getMilestone");

      return fetch(`${this.base}/milestones/${milestoneId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update milestone
     *
     * @param {UpdateMilestoneRequest} req updateMilestone request
     * @returns {Promise<UpdateMilestoneResponse>} The milestone
     */
    updateMilestone: req => {
      const { milestoneId, body } = req || {};

      if (!milestoneId)
        throw new Error("milestoneId is required for updateMilestone");
      if (!body) throw new Error("requetBody is required for updateMilestone");

      return fetch(`${this.base}/milestones/${milestoneId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Delete milestone
     *
     * @param {DeleteMilestoneRequest} req deleteMilestone request
     */
    deleteMilestone: req => {
      const { milestoneId } = req || {};

      if (!milestoneId)
        throw new Error("milestoneId is required for deleteMilestone");

      return fetch(`${this.base}/milestones/${milestoneId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * board's methods
   */
  board = {
    /**
     * get a board
     *
     * @param {GetBoardRequest} req getBoard request
     * @returns {Promise<GetBoardResponse>} Get a board
     */
    getBoard: req => {
      const { boardId } = req || {};

      if (!boardId) throw new Error("boardId is required for getBoard");

      return fetch(`${this.base}/boards/${boardId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * statistics's methods
   */
  statistics = {
    /**
     * Statistics tickets
     *
     * @param {GetTicketsStatisticsRequest} req getTicketsStatistics request
     * @returns {Promise<GetTicketsStatisticsResponse>} Expected response to a valid request
     */
    getTicketsStatistics: req => {
      const { query } = req || {};

      return fetch(`${this.base}/statistics/tickets`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
  };
}
