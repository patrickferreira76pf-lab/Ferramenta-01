# Design Guidelines: Enterprise Fleet Management System

## Design Approach: Enterprise Design System

**Selected Framework**: Material Design 3 with enterprise customization
**Rationale**: Information-dense application requiring consistent, scalable components with strong data visualization capabilities and proven enterprise patterns.

---

## Core Design Principles

1. **Data First**: Prioritize information clarity and scannability over decorative elements
2. **Efficiency**: Minimize clicks and cognitive load for daily operations
3. **Trust**: Professional, stable design that instills confidence in handling critical business data
4. **Hierarchy**: Clear visual distinction between primary actions, data, and navigation

---

## Color System

### Light Mode
- **Primary**: 220 80% 45% (Deep Blue) - navigation, primary actions, key metrics
- **Primary Variant**: 220 75% 35% (Darker Blue) - hover states
- **Secondary**: 200 70% 50% (Teal) - secondary actions, informational highlights
- **Background**: 0 0% 98% (Off-white)
- **Surface**: 0 0% 100% (White) - cards, tables, modals
- **Surface Variant**: 220 15% 96% (Light Gray) - subtle backgrounds

### Dark Mode
- **Primary**: 220 80% 65% (Lighter Blue)
- **Background**: 220 15% 12% (Dark Navy)
- **Surface**: 220 12% 18% (Card background)
- **Surface Variant**: 220 10% 22% (Elevated surfaces)

### Semantic Colors
- **Success**: 145 65% 45% (Green) - active vehicles, completed maintenance
- **Warning**: 38 92% 50% (Amber) - pending approvals, budget alerts
- **Error**: 0 65% 51% (Red) - overdue maintenance, budget overruns
- **Info**: 210 75% 55% (Blue) - informational badges

### Data Visualization Palette
- Chart colors: 220 80% 45%, 280 60% 55%, 340 70% 50%, 160 60% 45%, 30 80% 55%
- Use distinct hues for multi-category charts
- Maintain accessibility with WCAG AA contrast ratios

---

## Typography

**Font Families**:
- Primary: 'Inter' - UI elements, body text, data tables
- Monospace: 'JetBrains Mono' - IDs, license plates, chassis numbers

**Scale & Usage**:
- **Headings**:
  - H1: text-3xl font-bold (Page titles)
  - H2: text-2xl font-semibold (Section headers)
  - H3: text-xl font-semibold (Card titles)
  - H4: text-lg font-medium (Subsection headers)
  
- **Body**:
  - Default: text-base (Tables, forms, general content)
  - Small: text-sm (Secondary info, captions)
  - Tiny: text-xs (Metadata, timestamps)

- **Data Display**:
  - Metrics/KPIs: text-4xl font-bold
  - Table headers: text-sm font-semibold uppercase tracking-wide
  - Monetary values: text-base font-medium tabular-nums

---

## Layout System

**Spacing Units**: Consistent use of Tailwind spacing: 2, 4, 6, 8, 12, 16, 20, 24
- Micro spacing (2-4): Between related elements in forms
- Component spacing (6-8): Internal card/component padding
- Section spacing (12-16): Between major sections
- Layout spacing (20-24): Page margins, section gaps

**Container Strategy**:
- Max-width: max-w-7xl for main content
- Sidebar: fixed w-64
- Content area: flex-1 with px-6 py-8

**Grid Patterns**:
- Dashboard cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Vehicle listings: grid-cols-1 lg:grid-cols-2 xl:grid-cols-3
- Data tables: Full width with horizontal scroll on mobile

---

## Component Library

### Navigation
- **Top Bar**: Fixed header with organization logo, search, notifications, user menu
- **Sidebar**: Collapsible navigation with icons and labels, grouped by module
- **Breadcrumbs**: Show current location in hierarchy

### Data Display
- **Tables**: Striped rows, sortable columns, fixed header on scroll, inline actions
- **Cards**: Elevated surfaces with subtle shadows, clear headers, organized data sections
- **Stats Cards**: Large metric display with trend indicators, comparison values, icon representation
- **Timeline**: Vertical timeline for maintenance history with date markers and event details
- **Charts**: Bar charts for expenses, line charts for trends, donut charts for category breakdowns

### Forms & Inputs
- **Text Fields**: Material-style outlined inputs with floating labels
- **Dropdowns**: Searchable select with clear visual hierarchy
- **Date Pickers**: Calendar view with range selection capability
- **File Upload**: Drag-drop zone with progress indicators
- **Search**: Prominent search bar with filters and advanced options

### Action Elements
- **Primary Buttons**: Solid fills with primary color, medium size (px-6 py-2.5)
- **Secondary Buttons**: Outlined style with hover fill
- **Icon Buttons**: Circular or square, 40px touch target
- **FAB**: Fixed bottom-right for primary actions in list views

### Feedback & Overlays
- **Modals**: Centered overlay with backdrop blur, max-w-2xl
- **Drawers**: Slide from right for details/edit forms, w-96 or w-full on mobile
- **Toasts**: Top-right notifications with auto-dismiss
- **Loading States**: Skeleton screens for data tables, spinner for actions
- **Empty States**: Friendly illustrations with clear CTAs

### Status Indicators
- **Badges**: Small pills for vehicle status (Active/Maintenance/Inactive)
- **Progress Bars**: For budget usage, maintenance completion
- **Alert Banners**: Top of page for system-wide notifications

---

## Key Screens & Patterns

### Dashboard (Landing)
- 4-column KPI cards at top (Total Vehicles, Active Maintenance, Monthly Expenses, Alerts)
- Recent activity feed (left 2/3)
- Upcoming maintenance sidebar (right 1/3)
- Expense trend chart below KPIs
- Quick actions toolbar

### Vehicle Registry
- Filter sidebar (left): Status, brand, year, department
- Grid/List toggle view
- Vehicle cards with thumbnail, key specs, status badge
- Bulk actions toolbar when items selected
- Sort by: date added, mileage, next maintenance

### Vehicle Detail
- Header with large vehicle info and primary actions
- Tabbed interface: Overview, Maintenance History, Expenses, Documents
- Maintenance timeline with expandable entries
- Expense breakdown chart
- Document gallery with preview

### Maintenance Module
- Calendar view with color-coded maintenance types
- List view with filters (type, status, vehicle)
- Quick add maintenance form (drawer)
- Checklist interface for preventive maintenance
- Cost tracking integrated into each entry

### Financial Reports
- Date range selector prominent
- Multiple chart types: bar, line, pie
- Filterable by vehicle, category, department
- Export options (PDF, Excel, CSV)
- Summary cards with totals and averages

### Admin Panel
- User management table with role badges
- Audit log with filterable timeline
- System settings organized in accordion
- Organization profile with branding customization

---

## Interaction Patterns

- **Hover States**: Subtle background color change (opacity 10%)
- **Active States**: Slightly darker/pressed appearance
- **Transitions**: 150ms ease for micro-interactions, 300ms for modals/drawers
- **Focus Indicators**: 2px primary color outline with 2px offset
- **Drag & Drop**: Visual feedback with dashed borders and ghost preview

---

## Responsive Behavior

- **Desktop (1280px+)**: Full dashboard with sidebar, multi-column layouts
- **Tablet (768-1279px)**: Collapsible sidebar, 2-column grids
- **Mobile (<768px)**: Bottom navigation, single column, full-screen modals become drawers

---

## Accessibility

- Minimum text contrast: 4.5:1 for body, 3:1 for large text
- All interactive elements: 44px minimum touch target
- Keyboard navigation with visible focus indicators
- ARIA labels for icon-only buttons
- Screen reader announcements for dynamic content

---

## Data Visualization Guidelines

- Use consistent chart colors from defined palette
- Always include legends for multi-category data
- Tooltips on hover with precise values
- Responsive chart sizing (min-height 300px)
- Empty state handling with helpful messaging