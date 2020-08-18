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

      if (!projectId) throw new Error("projectId is required for updateProject");
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

      if (!projectId) throw new Error("projectId is required for deleteProject");

      return fetch(`${this.base}/projects/${projectId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List all repositories
     *
     * @param {ListRepositoriesRequest} req listRepositories request
     * @returns {Promise<ListRepositoriesResponse>} A paged array of repositories
     */
    listRepositories: req => {
      const { projectId } = req || {};

      if (!projectId) throw new Error("projectId is required for listRepositories");

      return fetch(`${this.base}/projects/${projectId}/repositories`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create a repository
     *
     * @param {CreateRepositoryRequest} req createRepository request
     * @returns {Promise<CreateRepositoryResponse>} The repository created
     */
    createRepository: req => {
      const { projectId, body } = req || {};

      if (!projectId) throw new Error("projectId is required for createRepository");
      if (!body) throw new Error("requetBody is required for createRepository");

      return fetch(`${this.base}/projects/${projectId}/repositories`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find repository by id
     *
     * @param {GetRepositoryRequest} req getRepository request
     * @returns {Promise<GetRepositoryResponse>} Expected response to a valid request
     */
    getRepository: req => {
      const { projectId, repositoryId } = req || {};

      if (!projectId) throw new Error("projectId is required for getRepository");
      if (!repositoryId) throw new Error("repositoryId is required for getRepository");

      return fetch(`${this.base}/projects/${projectId}/repositories/${repositoryId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update repository
     *
     * @param {UpdateRepositoryRequest} req updateRepository request
     * @returns {Promise<UpdateRepositoryResponse>} The repository
     */
    updateRepository: req => {
      const { projectId, repositoryId, body } = req || {};

      if (!projectId) throw new Error("projectId is required for updateRepository");
      if (!repositoryId) throw new Error("repositoryId is required for updateRepository");
      if (!body) throw new Error("requetBody is required for updateRepository");

      return fetch(`${this.base}/projects/${projectId}/repositories/${repositoryId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Delete repository
     *
     * @param {DeleteRepositoryRequest} req deleteRepository request
     */
    deleteRepository: req => {
      const { projectId, repositoryId } = req || {};

      if (!projectId) throw new Error("projectId is required for deleteRepository");
      if (!repositoryId) throw new Error("repositoryId is required for deleteRepository");

      return fetch(`${this.base}/projects/${projectId}/repositories/${repositoryId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List all milestones
     *
     * @param {ListMilestonesRequest} req listMilestones request
     * @returns {Promise<ListMilestonesResponse>} A paged array of milestones
     */
    listMilestones: req => {
      const { projectId } = req || {};

      if (!projectId) throw new Error("projectId is required for listMilestones");

      return fetch(`${this.base}/projects/${projectId}/milestones`, {
        method: "GET",
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
      const { projectId, body } = req || {};

      if (!projectId) throw new Error("projectId is required for createMilestone");
      if (!body) throw new Error("requetBody is required for createMilestone");

      return fetch(`${this.base}/projects/${projectId}/milestones`, {
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
      const { projectId, milestoneId } = req || {};

      if (!projectId) throw new Error("projectId is required for getMilestone");
      if (!milestoneId) throw new Error("milestoneId is required for getMilestone");

      return fetch(`${this.base}/projects/${projectId}/milestones/${milestoneId}`, {
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
      const { projectId, milestoneId, body } = req || {};

      if (!projectId) throw new Error("projectId is required for updateMilestone");
      if (!milestoneId) throw new Error("milestoneId is required for updateMilestone");
      if (!body) throw new Error("requetBody is required for updateMilestone");

      return fetch(`${this.base}/projects/${projectId}/milestones/${milestoneId}`, {
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
      const { projectId, milestoneId } = req || {};

      if (!projectId) throw new Error("projectId is required for deleteMilestone");
      if (!milestoneId) throw new Error("milestoneId is required for deleteMilestone");

      return fetch(`${this.base}/projects/${projectId}/milestones/${milestoneId}`, {
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
     * Create a ticket
     *
     * @param {CreateTicketRequest} req createTicket request
     * @returns {Promise<CreateTicketResponse>} The ticket created
     */
    createTicket: req => {
      const { projectId, body } = req || {};

      if (!projectId) throw new Error("projectId is required for createTicket");
      if (!body) throw new Error("requetBody is required for createTicket");

      return fetch(`${this.base}/projects/${projectId}/tickets`, {
        method: "POST",
        body,
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
      const { projectId, ticketId, body } = req || {};

      if (!projectId) throw new Error("projectId is required for updateTicket");
      if (!ticketId) throw new Error("ticketId is required for updateTicket");
      if (!body) throw new Error("requetBody is required for updateTicket");

      return fetch(`${this.base}/projects/${projectId}/tickets/${ticketId}`, {
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

      return fetch(`${this.base}/projects/${projectId}/tickets/${ticketId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * candidate take ticket
     *
     * @param {TakeTicketRequest} req takeTicket request
     * @returns {Promise<TakeTicketResponse>} The updated ticket
     */
    takeTicket: req => {
      const { projectId, ticketId, body } = req || {};

      if (!projectId) throw new Error("projectId is required for takeTicket");
      if (!ticketId) throw new Error("ticketId is required for takeTicket");
      if (!body) throw new Error("requetBody is required for takeTicket");

      return fetch(`${this.base}/projects/${projectId}/tickets/${ticketId}/!take`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * candidate undo ticket
     *
     * @param {UndoTicketRequest} req undoTicket request
     * @returns {Promise<UndoTicketResponse>} The updated ticket
     */
    undoTicket: req => {
      const { projectId, ticketId, body } = req || {};

      if (!projectId) throw new Error("projectId is required for undoTicket");
      if (!ticketId) throw new Error("ticketId is required for undoTicket");
      if (!body) throw new Error("requetBody is required for undoTicket");

      return fetch(`${this.base}/projects/${projectId}/tickets/${ticketId}/!undo`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * candidate done ticket
     *
     * @param {DoneTicketRequest} req doneTicket request
     * @returns {Promise<DoneTicketResponse>} The updated ticket
     */
    doneTicket: req => {
      const { projectId, ticketId, body } = req || {};

      if (!projectId) throw new Error("projectId is required for doneTicket");
      if (!ticketId) throw new Error("ticketId is required for doneTicket");
      if (!body) throw new Error("requetBody is required for doneTicket");

      return fetch(`${this.base}/projects/${projectId}/tickets/${ticketId}/!done`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * lane's methods
   */
  lane = {
    /**
     * List all lanes
     *
     * @param {ListLanesRequest} req listLanes request
     * @returns {Promise<ListLanesResponse>} A paged array of lanes
     */
    listLanes: req => {
      const { query } = req || {};

      return fetch(`${this.base}/lanes`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create a lane
     *
     * @param {CreateLaneRequest} req createLane request
     * @returns {Promise<CreateLaneResponse>} The lane created
     */
    createLane: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createLane");

      return fetch(`${this.base}/lanes`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Find lane by id
     *
     * @param {GetLaneRequest} req getLane request
     * @returns {Promise<GetLaneResponse>} Expected response to a valid request
     */
    getLane: req => {
      const { laneId } = req || {};

      if (!laneId) throw new Error("laneId is required for getLane");

      return fetch(`${this.base}/lanes/${laneId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update lane
     *
     * @param {UpdateLaneRequest} req updateLane request
     * @returns {Promise<UpdateLaneResponse>} The lane
     */
    updateLane: req => {
      const { laneId, body } = req || {};

      if (!laneId) throw new Error("laneId is required for updateLane");
      if (!body) throw new Error("requetBody is required for updateLane");

      return fetch(`${this.base}/lanes/${laneId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Delete lane
     *
     * @param {DeleteLaneRequest} req deleteLane request
     */
    deleteLane: req => {
      const { laneId } = req || {};

      if (!laneId) throw new Error("laneId is required for deleteLane");

      return fetch(`${this.base}/lanes/${laneId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
  };
}
